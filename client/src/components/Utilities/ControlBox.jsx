import {useContext, useEffect, useState} from 'react'
import {AuthContext} from '../../context/AuthContext'

import DeleteIcon from '@mui/icons-material/Delete'
import SendIcon from '@mui/icons-material/Send'

import Button from '@mui/material/Button'
import Box from '@mui/material/Box'

// Componente de botones de control para vista lista y vista detalles

function ControlBox({
  handleCreate,
  handleEdit,
  handleSubmit,
  handleDiscard,
  handleDelete,
}) {

  // Control de autorización: 
  const {user} = useContext(AuthContext)
  const [unauthorized, setUnauthorized] = useState(true)

  useEffect(() => {
    setUnauthorized(true)
    user && user.role === 'edit' ? setUnauthorized(false) : null
  }, [user])

  return (
    <>

      <Box>
        {handleCreate ? (
          <Button
            onClick={handleCreate}
            disabled={unauthorized}
            variant="outlined"
            sx={{m: 1}}
          >
            Crear nuevo
          </Button>
        ) : null}
        {handleEdit ? (
          <Button
            onClick={handleEdit}
            disabled={unauthorized}
            variant="outlined"
            sx={{m: 1}}
          >
            Editar datos
          </Button>
        ) : null}
        {handleSubmit ? (
          <Button
          onClick={handleSubmit}
            disabled={unauthorized}
            variant="contained"
            startIcon={<SendIcon />}
            sx={{m: 1}}
          >
            Enviar datos
          </Button>
        ) : null}

        {handleDiscard ? (
          <Button
          onClick={handleDiscard}
          variant="contained"
            sx={{m: 1}}
          >
            Descartar
          </Button>
        ) : null}

        {handleDelete ? (
          <Button
          onClick={handleDelete}
          disabled={unauthorized}
            variant="outlined"
            color="error"
            startIcon={<DeleteIcon />}
            sx={{m: 1}}
          >
            Eliminar
          </Button>
        ) : null}
      </Box>
    </>
  )
}

export default ControlBox
