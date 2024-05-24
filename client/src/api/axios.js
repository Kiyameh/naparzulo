import axios from 'axios'
const URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:3000"


// AXIOS CONFIG: 

const instance = axios.create({
  baseURL: URL,
  withCredentials: true,
})

export default instance