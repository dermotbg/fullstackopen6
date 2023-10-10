import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes' 

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const newAnec = async (content) => {
  const object = {
    content: content,
    votes: 0
  }
  const response = await axios.post(baseUrl, object)
  return response.data
}

const votingAnec = async (anecdote) => {
  const anecToUpdate = {
    ...anecdote,
    votes: anecdote.votes + 1
  }
  const response =  await axios.put(`${baseUrl}/${anecdote.id}`, anecToUpdate)
  return response.data
}

const anecdoteService = { getAll, newAnec, votingAnec }

export default anecdoteService