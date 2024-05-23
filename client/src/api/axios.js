import axios from 'axios'

// AXIOS CONFIG: 

const instance = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: true,
})

export default instance