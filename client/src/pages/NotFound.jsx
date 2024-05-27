import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

import './NotFound.css'

import {useNavigate} from 'react-router-dom'

// Layout para pagina no encontrada

function NotFound() {
  const navigate = useNavigate()

  return (
    <Box className="not-found-page-container">
      <Typography variant='h4'>Error 404: No hay nada aquí</Typography>
      <Button
        variant="contained"
        onClick={() => {
          navigate(-1)
        }}
      >
        Llevame de vuelta
      </Button>
    </Box>
  )
}

export default NotFound
