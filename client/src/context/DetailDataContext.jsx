import {createContext, useState} from 'react'

export const DetailDataContext = createContext()

// Contexto que maneja los formularios de creacion/actualización de nuevos items en la BBDD

export function DetailDataProvider({children}) {

  // Datos cargados en el formulario: 
  const [loadedData, setLoadedData] = useState()
  // Booleano: Modo edición o solo lectura:
  const [editing, setEditing] = useState(false)


  // Handle de actualización de los inputs: 
  const handleChange = (e) => {
    const {name, value} = e.target
    setLoadedData({
      ...loadedData,
      [name]: value,
    })
  }

  return (
    <DetailDataContext.Provider
      value={{loadedData, setLoadedData, editing, setEditing, handleChange}}
    >
      {children}
    </DetailDataContext.Provider>
  )
}
