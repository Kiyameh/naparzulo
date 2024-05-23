import Box from '@mui/material/Box'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'

import {useContext} from 'react'
import {DetailDataContext} from '../../../context/DetailDataContext'

function GroupDetailLayout() {
  const {loadedData, editing, handleChange} = useContext(DetailDataContext)
  return (
    <>
    <Accordion defaultExpanded={true}>
        <AccordionSummary expandIcon={<ArrowDownwardIcon />}>
          <Typography>Datos generales</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={{display: 'flex'}}>
              <TextField
              sx={{m: 1, flex: 2}}
              label="Acrónimo"
              value={loadedData.acronym}
              disabled={!editing}
              onChange={handleChange}
              name="acronym"
            />
            <TextField
              sx={{m: 1, flex: 6}}
              label="Nombre"
              value={loadedData.groupname}
              disabled={!editing}
              onChange={handleChange}
              name="groupname"
            />
            <TextField
              sx={{m: 1, flex: 6}}
              label="Página web"
              value={loadedData.webpage}
              disabled={!editing}
              onChange={handleChange}
              name="webpage"
            />
            <TextField
              sx={{m: 1, flex: 6}}
              label="Correo electrónico"
              value={loadedData.email}
              disabled={!editing}
              onChange={handleChange}
              name="email"
            />
          </Box>
          <Box sx={{display: 'flex'}}>
              <TextField
              sx={{m: 1, flex: 8}}
              label="Localización"
              value={loadedData.location}
              disabled={!editing}
              onChange={handleChange}
              name="location"
            />
            <TextField
              sx={{m: 1, flex: 2}}
              label="Telefono"
              value={loadedData.telephone}
              disabled={!editing}
              onChange={handleChange}
              name="telephone"
            />
          </Box>
          <Box>
            <TextField
              label="Descripción"
              sx={{m: 1}}
              value={loadedData.description}
              disabled={!editing}
              onChange={handleChange}
              name="description"
              multiline
              fullWidth
            />
          </Box>
        </AccordionDetails>
      </Accordion>
    </>
  )
}

export default GroupDetailLayout
