import { useSelector, useDispatch } from 'react-redux'
import { createAnec, vote } from './reducers/anecdoteReducer'

const App = () => {
  const anecdotes = useSelector(state => state).sort((a, b) => b.votes - a.votes)
  const dispatch = useDispatch()

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
            <button onClick={() => dispatch(vote(anecdote.id))}>vote</button>
          </div>
        </div>
      )}
      <h2>create new</h2>
      <form onSubmit={addNote}> 
        <div><input name='anecdote'/></div>
        <button type='submit' >create</button>
      </form>
    </div>
  )
}

export default App