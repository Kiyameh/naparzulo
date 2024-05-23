import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import {useContext} from 'react'
import {AuthContext} from '../../context/AuthContext'
import {useNavigate} from 'react-router-dom'

import IconButton from '@mui/material/IconButton'

function AvatarCard() {
  const {user, isLogin} = useContext(AuthContext)
  const navigate = useNavigate()

  function handleClick() {
    isLogin ? navigate('/profile') : navigate('/login')
  }

  return (
    <Box
      display="flex"
      gap="10px"
      alignItems="center"
      padding="20px"
      onClick={handleClick}
      sx={{cursor:'pointer'}}
    >
      <IconButton>
        <Avatar />
      </IconButton>
      {isLogin ? (
        <Box
          display="flex"
          flexDirection="column"
        >
          <Link>{user.username}</Link>
          <Link>{user.group}</Link>
        </Box>
      ) : (
        <Link>Iniciar Sesión</Link>
      )}
    </Box>
  )
}

export default AvatarCard
