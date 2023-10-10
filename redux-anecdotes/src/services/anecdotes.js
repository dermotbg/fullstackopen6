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

const anecdoteService = { getAll, newAnec }

export default anecdoteService