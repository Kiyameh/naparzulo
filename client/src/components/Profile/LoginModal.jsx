import {useState, useContext, useEffect} from 'react'
import {AuthContext} from '../../context/AuthContext'
import {FeaturesContext} from '../../context/FeaturesContext'
import {useNavigate} from 'react-router-dom'

import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import Link from '@mui/material/Link'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Box from '@mui/material/Box'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import LinearProgress from '@mui/material/LinearProgress'

import ServerResponseBox from '../Utilities/ServerResponseBox'

function LoginModal() {
  
  const navigate = useNavigate()

  const {showFeaturesMessage} = useContext(FeaturesContext)
  const {login, isLogin, serverResponse, setServerResponse, isLoading} = useContext(AuthContext)


  // Estado con los datos introducidos:
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  })

    // Estado con los datos de error de validación (front-end):
  const [validationErrors, setValidationErrors] = useState({
    email: '',
    password: '',
  })

  // Función de validación front-end
  function validateForm() {
    let valid = true
    const newErrors = {email: '', password: ''}

    const emailRegex = /^[\w\-.]+@([\w-]+\.)+[\w-]{2,}$/
    if (!formData.email || !emailRegex.test(formData.email)) {
      newErrors.email = 'Inserte un email valido'
      valid = false
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/
    if (!formData.password || !passwordRegex.test(formData.password)) {
      newErrors.password =
        'La contraseña debe de tener al menos seis digitos, una mayuscula y una minuscula'
      valid = false
    }

    setValidationErrors(newErrors)
    return valid
  }

  const handleChange = (e) => {
    const {name, value, checked} = e.target
    setFormData({
      ...formData,
      [name]: name === 'rememberMe' ? checked : value,
    })
  }

  useEffect(() => {
    isLogin
    ? setTimeout(() => {
        setServerResponse({})
          navigate(-1)
        }, 1000)
      : null
  }, [isLogin])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (isLogin) {
      return
    }
    if (validateForm()) {
      login(formData)
    }
  }

  function handleClose() {
    setServerResponse({})
    navigate(-1)
  }

  function handhandleSignUp(){
    setServerResponse({})
    navigate('/register')
  }

  return (
    <Dialog
      open={true}
      component="form"
      onSubmit={handleSubmit}
    >

      <DialogTitle>Iniciar sesión</DialogTitle>

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
          label="Correo electrónico"
          name="email"
          value={formData.email}
          onChange={handleChange}
          error={Boolean(validationErrors.email)}
          helperText={validationErrors.email}
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
        <FormControlLabel
          control={
            <Checkbox
              checked={formData.rememberMe}
              onChange={handleChange}
              onClick={()=>{showFeaturesMessage()}}
              name="rememberMe"
            />
          }
          label="Recuerdame"
          sx={{mt: 1, textAlign: 'left'}}
        />
        <Box sx={{mt: 2, textAlign: 'left'}}>
          <Link href="#" onClick={()=>{showFeaturesMessage()}}>Contraseña olvidada</Link>
        </Box>
      </DialogContent>
      <DialogActions sx={{display:'flex', justifyContent:'space-between'}}>
        <Button onClick={handhandleSignUp}>Crear cuenta</Button>
        <Box>
        <Button onClick={handleClose}>Cancelar</Button>
        <Button type="submit">Iniciar sesión</Button>
        </Box>
      </DialogActions>
    </Dialog>
  )
}

export default LoginModal
