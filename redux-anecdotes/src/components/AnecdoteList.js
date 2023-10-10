import { useSelector, useDispatch } from 'react-redux'
import { voteAnec } from '../reducers/anecdoteReducer'
import { messageChange, resetMessage } from '../reducers/notificationReducer'

const AnecdoteList = () => {

  const anecdotes = useSelector(state => {
    if (state.filter === ''){
      return [...state.anecdotes]
        .sort((a, b) => b.votes - a.votes)
    }
    return [...state.anecdotes
      .filter((a) => a.content.toLowerCase()
      .includes(state.filter
        .toLowerCase()))]
        .sort((a, b) => b.votes - a.votes)
}) 

  const dispatch = useDispatch()

  const voteHandler = (anecdote) => {
    dispatch(voteAnec(anecdote))
    dispatch(messageChange(anecdote.content))
    setTimeout(() => dispatch(resetMessage()),5000)
  }
  
  return(
    <div>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => voteHandler(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default AnecdoteList