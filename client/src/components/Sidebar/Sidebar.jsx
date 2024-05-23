import {useNavigate} from 'react-router-dom'

import Drawer from '@mui/material/Drawer'
import Divider from '@mui/material/Divider'
import Box from '@mui/material/Box'

import CategoryMenu from './CategoryMenu'
import AvatarCard from './AvatarCard'
import FavoritesMenu from './FavoritesMenu'
import STLogoContainer from './STLogoContainer'

import OtxolaLogo from '../../public/img/otxola_logo.jpg'

function Sidebar() {
  const navigate = useNavigate()
  const drawerConfig = {
    open: true,
    variant: 'permanent',
    PaperProps: {
      sx: {
        display: 'flex',
        justifyContent: 'space-between',
        paddingBottom: '25px',
        paddingTop: '25px',
      },
    },
  }

  return (
    <Drawer {...drawerConfig}>
      <Box>
        <img
          onClick={() => navigate('/')}
          src={OtxolaLogo}
          width={'220px'}
          style={{borderRadius: '10px', marginLeft: '25px', cursor: 'pointer'}}
          alt="Logotipo del club Otxola"
        />
        <AvatarCard />
        <CategoryMenu />
        <Divider />
        <FavoritesMenu />
      </Box>
      <STLogoContainer />
    </Drawer>
  )
}

export default Sidebar
