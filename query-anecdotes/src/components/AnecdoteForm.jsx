import { useNotificationDispatch } from "../NotificationContext"

/* eslint-disable react/prop-types */
const AnecdoteForm = ({ newAnecMutation }) => {
  const notificationDispatch = useNotificationDispatch()

  const onCreate = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    newAnecMutation.mutate({ content, votes: 0 })
    notificationDispatch({ content, type: 'CREATE' })
    setTimeout(() => {
      notificationDispatch({ type: 'RESET'})
    }, 5000)
}

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name='anecdote' />
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
