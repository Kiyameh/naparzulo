import CssBaseline from '@mui/material/CssBaseline'
import {ThemeProvider} from '@mui/material/styles'
import {createContext, useState} from 'react'
import {darkTheme} from './../styles/themes'

export const ThemeContext = createContext()

// Contexto que maneja el tema activo en la aplicación: 

export function CustomThemeProvider({children}) {
  const [activeTheme, setActiveTheme] = useState(darkTheme) 


  return (
    <ThemeContext.Provider value={{ setActiveTheme, activeTheme}}>
      <ThemeProvider theme={activeTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}
