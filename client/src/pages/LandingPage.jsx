import Landing1 from '../public/img/landing1.jpg'
import Landing2 from '../public/img/landing2.jpg'
import Landing3 from '../public/img/landing3.jpg'
import OtxolaLogo from '../public/img/otxola_logo.jpg'

import './LandingPage.css'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'

import {useNavigate} from 'react-router-dom'

// Layout de la pagina de inicio. 


function LandingPage() {
  const navigate = useNavigate()
  // Carga de imagen aleatoria al principio: 
  const landingImages = [Landing1, Landing2, Landing3]
  const randomNumber = Math.floor(Math.random() * landingImages.length)
  return (
    <Box className="landing-container">
      <Box className="landing-image-container">
        <img src={landingImages[randomNumber]} />
      </Box>
      <Box className="landing-text-container">
        <img src={OtxolaLogo}></img>
        <Typography>
          Bienvenidos al catálogo de cavidades navarras creado y mantenido por
          <Link
            className="link"
            href="https://otxola.blogspot.com/"
          >
            Otxola espeleologia taldea
          </Link>
          de Pamplona/Iruña.
        </Typography>
        <Typography>
          Esta pagina es una versión preliminar para probar la funcionalidad y
          esta creada con la tecnología de Subterra.db.
        </Typography>
        <Typography>
          Si quieres participar en las pruebas o recibir información ponte en
          contacto con:
          <Link
            className="link"
            href="mailto:kiyameh@outlook.com"
          >
            kiyameh@outlook.com
          </Link>
        </Typography>

        <Button
          variant="contained"
          onClick={() => {
            navigate('/cave/list')
          }}
        >
          Cuevas de Navarra
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            navigate('/system/list')
          }}
        >
          Sistemas de cavidades
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            navigate('/group/list')
          }}
        >
          Grupos y clubes
        </Button>
      </Box>
    </Box>
  )
}

export default LandingPage
