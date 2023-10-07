import { useSelector, useDispatch } from 'react-redux'
import { createAnec } from './reducers/anecdoteReducer'

const App = () => {
  const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()

  const vote = (id) => {
    console.log('vote', id)
    dispatch({
      type: 'VOTE',
      payload: { id }
    })
  }

  const addNote = (event) => {
    event.preventDefault()
    const text = event.target.anecdote.value
    event.target.anecdote.value = ''
    dispatch(createAnec(text))

  }

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      ).sort((a, b )=> a.votes - b.votes)}
      <h2>create new</h2>
      <form onSubmit={addNote}> 
        <div><input name='anecdote'/></div>
        <button type='submit' >create</button>
      </form>
    </div>
  )
}

export default App