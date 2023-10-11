import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

export const getAll = () => axios.get(baseUrl).then(res => res.data)

export const createAnec = newAnec => axios.post(baseUrl, newAnec).then(res => res.data)