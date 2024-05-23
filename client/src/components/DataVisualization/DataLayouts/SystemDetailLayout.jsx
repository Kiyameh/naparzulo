import Box from '@mui/material/Box'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'

import {useContext} from 'react'
import {DetailDataContext} from '../../../context/DetailDataContext'

function SystemDetailLayout() {
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
            label="CEN"
            value={loadedData.catalog}
            disabled={!editing}
            onChange={handleChange}
            name="catalog"
          />
          <TextField
            sx={{m: 1, flex: 2}}
            label="Siglas"
            value={loadedData.initials}
            disabled={!editing}
            onChange={handleChange}
            name="initials"
          />
          <TextField
            sx={{m: 1, flex: 6}}
            label="Nombre"
            value={loadedData.systemname}
            disabled={!editing}
            onChange={handleChange}
            name="systemname"
          />
          <TextField
            sx={{m: 1, flex: 6}}
            label="Nombre alt"
            value={loadedData.alt_systemname}
            disabled={!editing}
            onChange={handleChange}
            name="alt_systemname"
          />
        </Box>
        <Box sx={{display: 'flex'}}>
          <TextField
            sx={{m: 1, flex: 8}}
            label="Cavidades"
            value={loadedData.caves}
            disabled={!editing}
            onChange={handleChange}
            name="caves"
          />
          <TextField
            sx={{m: 1, flex: 2}}
            label="Profundidad"
            value={loadedData.depth}
            disabled={!editing}
            onChange={handleChange}
            name="depth"
          />
          <TextField
            sx={{m: 1, flex: 2}}
            label="Desarrollo"
            value={loadedData.length}
            disabled={!editing}
            onChange={handleChange}
            name="length"
          />
          <TextField
            sx={{m: 1, flex: 4}}
            label="Macizo"
            value={loadedData.massif}
            disabled={!editing}
            onChange={handleChange}
            name="massif"
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

export default SystemDetailLayout
