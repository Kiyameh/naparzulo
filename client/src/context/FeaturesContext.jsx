import {createContext, useState} from 'react'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import EngineeringIcon from '@mui/icons-material/Engineering';

// Contexto que muestra un dialogo para indicar que la funcionalidad no está todavía disponible

export const FeaturesContext = createContext()

export function FeaturesProvider({children}) {

  const [displayed, setDisplayed] = useState(false)

  function showFeaturesMessage(){
    setDisplayed(true)
    setTimeout(() => {
      setDisplayed(false)
      }, 2000)
  }

  return (
    <FeaturesContext.Provider value={{showFeaturesMessage}}>

      <Dialog open={displayed}>
        <DialogTitle>Funcionalidad en desarrollo</DialogTitle>
        <EngineeringIcon fontSize='large' sx={{margin:'auto'}}/>
        <DialogContent>Disponible en proximas versiones</DialogContent>
      </Dialog>
      {children}
    </FeaturesContext.Provider>
  )
}
