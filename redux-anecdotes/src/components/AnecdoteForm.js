import { useDispatch } from "react-redux"
import { createAnec } from '../reducers/anecdoteReducer'
import { setNotification } from "../reducers/notificationReducer"

const AnecdoteForm = () => {
  const dispatch = useDispatch()
  
  const addNote = async (event) => {
    event.preventDefault()
    const text = event.target.anecdote.value
    event.target.anecdote.value = ''
    dispatch(createAnec(text))
    dispatch(setNotification(`new anecdote: '${text}' created`, 10))
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