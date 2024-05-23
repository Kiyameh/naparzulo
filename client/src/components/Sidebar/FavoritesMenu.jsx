import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemButton from '@mui/material/ListItemButton'

import StarOutlineIcon from '@mui/icons-material/StarOutline';
import { useContext } from 'react';
import { FeaturesContext } from '../../context/FeaturesContext';



function FavoritesMenu() {

  const {showFeaturesMessage} = useContext(FeaturesContext)

  // TO-DO: LISTA DE FAVORITOS

  return (
    <List dense={true}>
      <ListItem >
        <ListItemButton onClick={()=>{showFeaturesMessage()}}>
          <ListItemIcon>
            <StarOutlineIcon color='warning'/>
          </ListItemIcon>
          Cueva del Monje
        </ListItemButton>
      </ListItem>
      <ListItem>
      <ListItemButton onClick={()=>{showFeaturesMessage()}}>
          <ListItemIcon>
          <StarOutlineIcon color='warning'/>
          </ListItemIcon>
          Sima de la Flaca
        </ListItemButton>
      </ListItem>
      <ListItem>
      <ListItemButton onClick={()=>{showFeaturesMessage()}}>
          <ListItemIcon>
          <StarOutlineIcon color='warning'/>
          </ListItemIcon>
          Cuave Mapache
        </ListItemButton>
      </ListItem>
      <ListItem>
      <ListItemButton onClick={()=>{showFeaturesMessage()}}>
          <ListItemIcon>
          <StarOutlineIcon color='warning'/>
          </ListItemIcon>
          Sistema de los ojos
        </ListItemButton>
      </ListItem>
    </List>
  )
}

export default FavoritesMenu
