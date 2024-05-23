import {useState, useContext,useEffect} from 'react'
import {AuthContext} from '../../context/AuthContext'
import {useNavigate} from 'react-router-dom'

import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import LinearProgress from '@mui/material/LinearProgress'
import ServerResponseBox from '../Utilities/ServerResponseBox'

function RegisterModal() {
  
  const navigate = useNavigate()
  const {register, isLogin, serverResponse, setServerResponse, isLoading} = useContext(AuthContext)

  // Estado con los datos introducidos:
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    group: '',
  })

    // Estado con los datos de error de validación (front-end):
    const [validationErrors, setValidationErrors] = useState({
    username: '',
    password: '',
    email: '',
  })

    // Función de validación front-end
  function validateForm() {
    let valid = true
    const newErrors = {username: '', password: '', email: ''}

    if (!formData.username) {
      newErrors.username = 'Usuario requerido'
      valid = false
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/
    if (!formData.password || !passwordRegex.test(formData.password)) {
      newErrors.password =
        'La contraseña debe de tener al menos seis digitos, una mayuscula y una minuscula'
      valid = false
    }
    const emailRegex = /^[\w\-.]+@([\w-]+\.)+[\w-]{2,}$/
    if (!formData.email || !emailRegex.test(formData.email)) {
      newErrors.email = 'Inserte un email valido'
      valid = false
    }
    setValidationErrors(newErrors)
    return valid
  }

  const handleChange = (e) => {
    const {name, value} = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }
  
    useEffect(() => {
      isLogin
        ? setTimeout(() => {
            setServerResponse({})
            navigate(-2)
          }, 1000)
        : null
    }, [isLogin])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (isLogin) {
      return
    }
    if (validateForm()) {
      register(formData)
    } 
  }
  
    function handlClose() {
      setServerResponse({})
      navigate(-2)
    }

  return (
    <Dialog
      open={true}
      component="form"
      onSubmit={handleSubmit}
    >
      <DialogTitle>Registrarse</DialogTitle>
      {isLoading ? <LinearProgress/> : null}

      <DialogContent>
      {serverResponse.code === 200 
      ? <ServerResponseBox text={serverResponse.text} severity={'success'}/> 
      : null}
      {serverResponse.code === 400 
      ? <ServerResponseBox text={serverResponse.text} severity={'error'}/> 
      : null}

        <TextField
          fullWidth
          label="Nombre de usuario"
          name="username"
          value={formData.username}
          onChange={handleChange}
          error={Boolean(validationErrors.username)}
          helperText={validationErrors.username}
          margin='dense'

        />
        <TextField
          fullWidth
          type="password"
          label="Contraseña"
          name="password"
          value={formData.password}
          onChange={handleChange}
          error={Boolean(validationErrors.password)}
          helperText={validationErrors.password}
          sx={{mt: 2}}
        />
        <TextField
          fullWidth
          type="email"
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          error={Boolean(validationErrors.email)}
          helperText={validationErrors.email}
          sx={{mt: 2}}
        />
        <TextField
          fullWidth
          label="Grupo"
          name="group"
          value={formData.group}
          onChange={handleChange}
          error={Boolean(validationErrors.group)}
          helperText={validationErrors.group}
          sx={{mt: 2}}
        />
        
      </DialogContent>
      <DialogActions>
        <Button onClick={handlClose}>Cancelar</Button>
        <Button type="submit">Registrarse</Button>
      </DialogActions>
    </Dialog>
  )
}

export default RegisterModal
