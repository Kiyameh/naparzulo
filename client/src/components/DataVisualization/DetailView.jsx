import {useState, useEffect, useContext} from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import LinearProgress from '@mui/material/LinearProgress'

import {
  caveRequest,
  groupRequest,
  systemRequest,
  createCaveRequest,
  createGroupRequest,
  createSystemRequest,
  deleteCaveRequest,
  deleteGroupRequest,
  deleteSystemRequest,
  updateCaveRequest,
  updateGroupRequest,
  updateSystemRequest,
} from '../../api/data'

import {DetailDataContext} from '../../context/DetailDataContext'
import ServerResponseBox from '../Utilities/ServerResponseBox'
import ControlBox from '../Utilities/ControlBox'

import CaveDetailLayout from './DataLayouts/CaveDetailLayout'
import SystemDetailLayout from './DataLayouts/SystemDetailLayout'
import GroupDetailLayout from './DataLayouts/GroupDetailLayout'

function DetailView() {
  const {datatype, action, id} = useParams()
  const navigate = useNavigate()
  const {loadedData, setLoadedData, editing, setEditing} =
    useContext(DetailDataContext)
  const [loadedLayout, setLoadedLayout] = useState(null)

  // INICIALIZACIÓN Y CARGA DEL COMPONENTE:
  const [isLoading, setIsLoading] = useState(true)
  const [serverResponse, setServerResponse] = useState({
    text: null,
    severity: 'error',
  })

  // Efecto que se actualiza al principio:
  useEffect(() => {
    setServerResponse({text: null, severity: 'error'})
    
    switch(datatype){
      case "cave":{setLoadedLayout(<CaveDetailLayout />)}
      break
      case "system": {setLoadedLayout(<SystemDetailLayout />)}
      break
      case "group":{setLoadedLayout(<GroupDetailLayout />)}
      break
      default : navigate("/404")
    }

    id ? getData(id, datatype) : setLoadedData([])

    switch(action){
      case "edit":{setEditing(true)}
      break
      case "details": {setEditing(false)}
      break
      case "create":{
        setEditing(true)
        setIsLoading(false)
      }
      break
      default : navigate("/404")
    }

  }, [datatype,action,id])

  

  async function getData(id, datatype) {
    try {
      let res
      switch (datatype) {
        case 'cave':
          {
            res = await caveRequest(id)
          }
          break
        case 'system':
          {
            res = await systemRequest(id)
          }
          break
        case 'group':
          {
            res = await groupRequest(id)
          }
          break
      }

      setLoadedData({...res.data})
    } catch (e) {
      setServerResponse({text: e.message, severity: 'error'})
    }
    setIsLoading(false)
  }
  function editItem(){
    setEditing(true)
  }
  function discardItem(){
    navigate(-1)
  }
  async function submitItem(e) {
    e.preventDefault()
    setIsLoading(true)

    try {
      if (!id) {
        switch (datatype) {
          case 'cave':
            {
              await createCaveRequest(loadedData)
            }
            break
          case 'system':
            {
              await createSystemRequest(loadedData)
            }
            break
          case 'group':
            {
              await createGroupRequest(loadedData)
            }
            break
        }
      } else {
        switch (datatype) {
          case 'cave':
            {
              await updateCaveRequest(id, loadedData)
            }
            break
          case 'system':
            {
              await updateSystemRequest(id, loadedData)
            }
            break
          case 'group':
            {
              await updateGroupRequest(id, loadedData)
            }
            break
        }
      }
      setServerResponse({
        text: '<Front> Item actualizado con exito',
        severity: 'success',
      })
      setEditing(false)
      setIsLoading(false)
    } catch (e) {
      setServerResponse({text: e.message, severity: 'error'})
      setIsLoading(false)
    }
  }
  async function deleteItem(e) {
    e.preventDefault()
    setIsLoading(true)
    try {
      switch (datatype) {
        case 'cave':
          {
            await deleteCaveRequest(id)
          }
          break
        case 'system':
          {
            await deleteSystemRequest(id)
          }
          break
        case 'group':
          {
            await deleteGroupRequest(id)
          }
          break
      }
      setServerResponse({
        text: '<Front> Item eliminado con exito',
        severity: 'success',
      })
      setEditing(false)
      setLoadedData([])
      setIsLoading(false)
      setTimeout(() => {
        navigate('/cave/list')
      }, 2000)
    } catch (e) {
      setServerResponse({text: e.message, severity: 'error'})
      setIsLoading(false)
    }
  }

  return (
    <>
      <ControlBox
        handleEdit={editing ? null : editItem}
        handleSubmit={editing ? submitItem : null}
        handleDiscard={editing? discardItem : null}
        handleDelete={id ? deleteItem : null}
      ></ControlBox>

      {serverResponse.text ? (
        <ServerResponseBox
          text={serverResponse.text}
          severity={serverResponse.error}
        />
      ) : null}

      {isLoading ? <LinearProgress /> : 
      
      loadedLayout
      
      }
    </>
  )
}

export default DetailView
