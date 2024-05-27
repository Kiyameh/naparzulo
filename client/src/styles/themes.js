import { createTheme } from '@mui/material/styles'

// Temas visuales de la aplicación

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: "#2a2a2a"
    }
  },
  components: {
    MuiTextField:{
      styleOverrides:{
          root:{            
            "& .MuiInputBase-input.Mui-disabled": {
              WebkitTextFillColor: "white",
          },
        }
      }
    }
  }
})

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
  components: {
    MuiTextField:{
      styleOverrides:{
          root:{            
            "& .MuiInputBase-input.Mui-disabled": {
              WebkitTextFillColor: "black",
          },
        }
      }
    }
  }
})
