import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

function Unautorized() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography sx={{fontSize: '18px'}}>
        No estas autorizado para ver esta sección. Por favor, ponte en contacto
        con el administrador de la base de datos.
      </Typography>
    </Box>
  )
}

export default Unautorized
