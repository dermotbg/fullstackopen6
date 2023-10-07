import { useDispatch } from "react-redux"
import { createAnec } from '../reducers/anecdoteReducer'

const AnecdoteForm = () => {
  const dispatch = useDispatch()
  
  const addNote = (event) => {
    event.preventDefault()
    const text = event.target.anecdote.value
    event.target.anecdote.value = ''
    dispatch(createAnec(text))
  }
  
  return(
    <div>
      <h2>create new</h2>
          <form onSubmit={addNote}>
            <div><input name='anecdote'/></div>
            <button type='submit' >create</button>
          </form>
    </div>
  )
}

export default AnecdoteForm