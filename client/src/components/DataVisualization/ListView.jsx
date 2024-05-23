import * as React from 'react'
import {useEffect, useState} from 'react'
import {useNavigate, useParams} from 'react-router-dom'

import {DataGrid, GridToolbar, GridActionsCellItem} from '@mui/x-data-grid'
import {esES} from '@mui/x-data-grid/locales'

import StarBorderIcon from '@mui/icons-material/StarBorder'
import VisibilityIcon from '@mui/icons-material/Visibility'
import EditIcon from '@mui/icons-material/Edit'

import {caveListRequest, groupListRequest, systemListRequest} from '../../api/data'
import {cavesColumns, groupsColumns, systemsColumns} from '../../models/columnLayouts'

import ServerResponseBox from '../Utilities/ServerResponseBox'
import ControlBox from '../Utilities/ControlBox'
import { useContext } from 'react'
import { FeaturesContext } from '../../context/FeaturesContext'


function ListView() {

  const {showFeaturesMessage} = useContext(FeaturesContext)

  const {datatype} = useParams()
  const navigate = useNavigate()

  const [isLoading,setIsLoading] = useState(true)
  const [loadedData, setLoadedData] = useState([])
  const [loadedColumns, setLoadedColumns] = useState([])
  const [serverResponse, setServerResponse] = useState(null)

  function addFavourite(id) {
    // TO-DO
    showFeaturesMessage()
    console.log(id)
  }

  async function getData(datatype) {
    try {
      let res
      switch(datatype){
        case 'cave' : {res = await caveListRequest()}
        break
        case 'system' : {res = await systemListRequest()}
        break
        case 'group' : {res = await groupListRequest()}
        break
        default: navigate("/404")
      }

      setLoadedData(res.data)
      setIsLoading(false)
    } catch (e) {
      setServerResponse(e.message)
      setIsLoading(false)
    }
  }

  function getColumns(datatype){
    switch(datatype){
      case 'cave' : {setLoadedColumns(cavesColumns)}
      break
      case 'system' : {setLoadedColumns(systemsColumns)}
      break
      case 'group' : {setLoadedColumns(groupsColumns)}
      break
      default: {setLoadedColumns([])}
    }
  }

  useEffect(() => {
    setIsLoading(true)
    setServerResponse(null)
    getColumns(datatype)
    getData(datatype)
  }, [datatype])

  
  const rowActions = React.useMemo(
    () => [
      {
        field: 'actions',
        type: 'actions',
        flex: 2,
        getActions: (params) => [
          <GridActionsCellItem
            key="fav"
            icon={<StarBorderIcon />}
            label="Favorito"
            onClick={() => {
              addFavourite(params.id)
            }}
          />,
          <GridActionsCellItem
            key="edit"
            icon={<EditIcon />}
            label="Editar"
            onClick={() => {
              navigate(`/${datatype}/edit/${params.id}`)
            }}
            showInMenu
          />,
          <GridActionsCellItem
            key="details"
            icon={<VisibilityIcon />}
            label="Detalles"
            onClick={() => {
              navigate(`/${datatype}/details/${params.id}`)
            }}
            showInMenu
          />,
        ],
      },
    ],
    [datatype]
  )

  const dataGridData = {
    rows: loadedData, // Filas
    columns: [...rowActions, ...loadedColumns], // Columnas
  }

  const dataGridConfig = {
    getRowId: (row) => row._id, // Especificar dato de ID de la base de datos.
    localeText: esES.components.MuiDataGrid.defaultProps.localeText, // Modificador idioma
    sx: {height: '90vh'}, // Estilos personalizados (tamaño vertical)
    autoPageSize: true, // Numero de filas automatico en función de tamaño disponible
    disableColumnMenu: true, // Ocultar menú en cada cabecera de columna
    initialState: {
      columns: {
        columnVisibilityModel: {
          id: false, // No mostrar ID al principio
        },
      },
    },
    slots: {
      toolbar: GridToolbar, // Mostrar barra herramientas superior
    },
    slotProps: {
      toolbar: {
        showQuickFilter: true, // Mostrar cuadro busqueda
      },
    },
  }

  return (
    <>
      {serverResponse 
      ? <ServerResponseBox text={serverResponse} severity={'error'}/> 
      : null}

      <ControlBox
        handleCreate={()=>{navigate(`/${datatype}/create`)}}
      ></ControlBox>


      <DataGrid        
        loading = {isLoading}
        {...dataGridConfig}
        {...dataGridData}
      ></DataGrid>

    </>
  )
}

export default ListView
