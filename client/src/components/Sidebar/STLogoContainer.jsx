import LogoDark from '../../public/img/subterra_logo_dark.png'
import LogoLight from '../../public/img/subterra_logo_light.png'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import {useContext} from 'react'
import {ThemeContext} from '../../context/ThemeContext'
import {darkTheme} from '../../styles/themes'

function STLogoContainer() {
  const {activeTheme} = useContext(ThemeContext)

  return (
    <Box
      sx={{
        display: 'flex',
        gap: '5px',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Typography>Con la tecnología de:</Typography>
      <img
        src={activeTheme === darkTheme ? LogoDark : LogoLight}
        width={'150px'}
        alt="Logotipo de Subterra"
      />
    </Box>
  )
}

export default STLogoContainer
