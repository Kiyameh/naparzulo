import axios from 'axios'
//const URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:3000"
const URL = "https://naparzulo-server.onrender.com"


// AXIOS CONFIG: 

const instance = axios.create({
  baseURL: URL,
  withCredentials: true,
})

export default instance