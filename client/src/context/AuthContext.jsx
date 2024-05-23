import {createContext, useEffect, useState} from 'react'
import {
  registerRequest,
  loginRequest,
  verifyTokenRequest,
  logoutRequest,
} from '../api/auth'
import Cookies from 'js-cookie'

export const AuthContext = createContext()

export function AuthProvider({children}) {
  // Estados react
  // user: Usuario actual
  // isLogin: Booleano si sesión iniciada
  // serverResponse: Almacena respuesta de servidor
  // isLoading: Booleano si carga en proceso
  
  const [user, setUser] = useState(null)
  const [isLogin, setIsLogin] = useState(false)
  const [serverResponse, setServerResponse] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  // Función login: Ejecuta una petición de login a la bbdd y almacena el usuario y/o la repuesta del servidor en los estados
  async function login(user) {
    setServerResponse({})
    setIsLoading(true)
    let newResponse
    try {
      const response = await loginRequest(user)
      setUser(response.data)
      setIsLogin(true)
      newResponse = {
        code: response.status,
        text: '<Front> Sesión iniciada',
      }
    } catch (error) {
      newResponse = {
        code: error.response.status,
        text: error.response.data.message,
      }
    }
    setServerResponse(newResponse)
    setIsLoading(false)
  }

  // Función register: Ejecuta una petición de registro a la bbdd y almacena el usuario y/o la repuesta del servidor en los estados
  async function register(user) {
    setServerResponse({})
    setIsLoading(true)
    let newResponse
    try {
      const response = await registerRequest(user)
      setUser(response.data)
      setIsLogin(true)
      newResponse = {
        code: response.status,
        text: '<Front> Usuario creado',
      }
    } catch (error) {
      newResponse = {
        code: error.response.status,
        text: error.response.data.message,
      }
    }
    setServerResponse(newResponse)
    setIsLoading(false)
  }

  // Función logout: Ejecuta una petición de token vacio a la bbdd y borra el usuario y/o la repuesta del servidor en los estados
  async function logout() {
    setServerResponse({})
    setIsLoading(true)
    let newResponse
    try {
      const response = await logoutRequest()
      setUser(null)
      setIsLogin(false)
      newResponse = {
        code: response.status,
        text: '<Front> Sesión finalizada',
      }
    } catch (error) {
      newResponse = {
        code: error.response.status,
        text: error.response.data.message,
      }
    }
    setServerResponse(newResponse)
    setIsLoading(false)
  }

  // Efecto que se ejecuta al inicio y comprueba si existe un token valido en el navegador.
  useEffect(() => {
    async function checkLogin() {
      const cookies = Cookies.get()

      if (!cookies.token) {
        setIsLogin(false)
        setUser(null)
        return
      }

      try {
        const res = await verifyTokenRequest(cookies.token)
        if (!res.data) return setIsLogin(false)

        setIsLogin(true)
        setUser(res.data)
      } catch (error) {
        setIsLogin(false)
        setUser(null)
      }
    }
    checkLogin()
  }, [])

  return (
    <AuthContext.Provider
      value={{
        user,
        isLogin,
        serverResponse,
        setServerResponse,
        isLoading,
        setIsLoading,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
