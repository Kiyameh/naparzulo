import {Box, Container} from '@mui/material'
import {Outlet} from 'react-router-dom'
import Sidebar from '../components/Sidebar/Sidebar'

function MainLayout() {
  return (
    <Container maxWidth={false}>
      <Sidebar></Sidebar>
      <Box
        sx={{
          padding: '20px',
          paddingLeft: '340px',
          width: '100%',
          height: '100%',
        }}
      >
        <Outlet></Outlet>
      </Box>
    </Container>
  )
}
export default MainLayout
