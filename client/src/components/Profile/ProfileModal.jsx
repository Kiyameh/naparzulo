import {useContext, useEffect} from 'react'
import {AuthContext} from '../../context/AuthContext'
import {ThemeContext} from '../../context/ThemeContext'
import {useNavigate} from 'react-router-dom'

import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import LinearProgress from '@mui/material/LinearProgress'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import Typography from '@mui/material/Typography'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'

import {darkTheme, lightTheme} from '../../styles/themes'

import ServerResponseBox from '../Utilities/ServerResponseBox'

function ProfileModal() {
  const navigate = useNavigate()
  const {setActiveTheme} = useContext(ThemeContext)
  const {user, isLogin, serverResponse, setServerResponse, isLoading, logout} =
    useContext(AuthContext)

  useEffect(() => {
    isLogin
      ? null
      : setTimeout(() => {
          setServerResponse({})
          navigate(-1)
        }, 2000)
  }, [isLogin, navigate])

  function handlClose() {
    setServerResponse({})
    navigate(-1)
  }
  function handlLogout() {
    logout()
  }

  const handlTheme = (e, newTheme) => {
    setActiveTheme(newTheme)
  }

  return (
    <>
      <Dialog open={true}>
        <DialogTitle>Perfil</DialogTitle>
        <DialogContent>
          {isLoading ? <LinearProgress/> : null}

          {serverResponse.code === 200 ? (
            <ServerResponseBox
              text={serverResponse.text}
              severity={'success'}
            />
          ) : null}

          {serverResponse.code === 400 ? (
            <ServerResponseBox
              text={serverResponse.text}
              severity={'error'}
            />
          ) : null}

          <Box
            sx={{
              p: '50px',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
            }}
          >
            <Typography>Usuario: {isLogin ? user.username : null}</Typography>
            <Typography>Grupo: {isLogin ? user.group : null}</Typography>
            <ToggleButtonGroup
              exclusive
              onChange={handlTheme}
            >
              <ToggleButton value={darkTheme}>
                <Brightness4Icon />
              </ToggleButton>
              <ToggleButton value={lightTheme}>
                <Brightness7Icon />
              </ToggleButton>
            </ToggleButtonGroup>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handlClose}>Atras</Button>
          <Button onClick={handlLogout}>Cerrar sesión</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default ProfileModal
