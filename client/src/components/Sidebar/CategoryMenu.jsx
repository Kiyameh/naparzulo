import {Link} from 'react-router-dom'

import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemButton from '@mui/material/ListItemButton'

import TravelExploreOutlinedIcon from '@mui/icons-material/TravelExploreOutlined'
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined'
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined'

function CategoryMenu() {


  return (
    <List>
      <ListItem >
        <ListItemButton component={Link} to={'/cave/list'}>
          <ListItemIcon>
            <TravelExploreOutlinedIcon />
          </ListItemIcon>
          Cavidades
        </ListItemButton>
      </ListItem>
      <ListItem >
        <ListItemButton component={Link} to={'/system/list'}>
          <ListItemIcon>
            <AccountTreeOutlinedIcon />
          </ListItemIcon>
          Sistemas
        </ListItemButton>
      </ListItem>
      <ListItem >
        <ListItemButton component={Link} to={'/group/list'}>
          <ListItemIcon>
            <GroupsOutlinedIcon />
          </ListItemIcon>
          Grupos
        </ListItemButton>
      </ListItem>
    </List>
  )
}

export default CategoryMenu
