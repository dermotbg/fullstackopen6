import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import { createAnec, getAll, voteAnec } from './requests'
import { useNotificationDispatch } from './NotificationContext'

const App = () => {

  const queryClient = useQueryClient()
  const newAnecMutation = useMutation(createAnec, {
    onSuccess:(newAnec) => {
      const anecdotes = queryClient.getQueryData(['anecdotes'])
      queryClient.setQueryData(['anecdotes'], anecdotes.concat(newAnec))
    },
    onError:() => {
    notificationDispatch({ type: 'ERROR' })
    }
  })
  
  const voteAnecdoteMutation = useMutation(voteAnec, {
    onSuccess: () => {
      queryClient.invalidateQueries(['anecdotes'])
    }
  })
  
  const notificationDispatch = useNotificationDispatch()
  const handleVote = (anecdote) => {
    voteAnecdoteMutation.mutate({ ...anecdote, votes: anecdote.votes +1 })
    notificationDispatch({...anecdote, type: 'VOTE'})
    setTimeout(() => {
      notificationDispatch({type: 'RESET'})
    }, 5000)
  }

  
  const result = useQuery({
    queryKey: ['anecdotes'],
    queryFn: getAll
  })
  
  if ( result.isLoading ) return <div>loading data...</div>
  if ( result.isError ) return <div>error connecting to server</div> 

  const anecdotes = result.data

  return (
    <div>
      <h3>Anecdote app</h3>
    
      <Notification />
      <AnecdoteForm newAnecMutation={newAnecMutation}/>
    
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
