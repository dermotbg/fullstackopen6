import { useDispatch } from "react-redux"
import { createAnec } from '../reducers/anecdoteReducer'
import anecdoteService from "../services/anecdotes"

const AnecdoteForm = () => {
  const dispatch = useDispatch()
  
  const addNote = async (event) => {
    event.preventDefault()
    const text = event.target.anecdote.value
    event.target.anecdote.value = ''
    const newAnecdote = await anecdoteService.newAnec(text)
    dispatch(createAnec(newAnecdote))
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