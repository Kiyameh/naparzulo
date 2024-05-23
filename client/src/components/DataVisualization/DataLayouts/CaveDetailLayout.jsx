import Box from '@mui/material/Box'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'

import {CAVE_TYPE_OPTIONS} from '../../../models/inputOptions'

import {useContext} from 'react'
import {DetailDataContext} from '../../../context/DetailDataContext'

function CaveDetailLayout() {
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
              value={loadedData.catalog?loadedData.catalog:undefined}
              disabled={!editing}
              onChange={handleChange}
              name="catalog"
            />
            <TextField
              sx={{m: 1, flex: 2}}
              label="Siglas"
              value={loadedData.initials?loadedData.initials:undefined}
              disabled={!editing}
              onChange={handleChange}
              name="initials"
            />
            <TextField
              sx={{m: 1, flex: 6}}
              label="Nombre"
              value={loadedData.cavename?loadedData.cavename:undefined}
              disabled={!editing}
              onChange={handleChange}
              name="cavename"
            />
            <TextField
              sx={{m: 1, flex: 6}}
              label="Nombre alt"
              value={loadedData.alt_cavename?loadedData.alt_cavename:undefined}
              disabled={!editing}
              onChange={handleChange}
              name="alt_cavename"
            />
          </Box>
          <Box sx={{display: 'flex'}}>
            <Select
              sx={{m: 1, flex: 2}}
              disabled={!editing}
              value={loadedData.type?loadedData.type:undefined}
              onChange={handleChange}
              name="type"
            >
              {CAVE_TYPE_OPTIONS.map((item, index) => {
                return (
                  <MenuItem
                    key={index}
                    value={item}
                  >
                    {item}
                  </MenuItem>
                )
              })}
            </Select>

            <TextField
              sx={{m: 1, flex: 8}}
              label="Sistema"
              value={loadedData.system?loadedData.system:undefined}
              disabled={!editing}
              onChange={handleChange}
              name="system"
            />
            <TextField
              sx={{m: 1, flex: 2}}
              label="Profundidad"
              value={loadedData.depth?loadedData.depth:undefined}
              disabled={!editing}
              onChange={handleChange}
              name="depth"
            />
            <TextField
              sx={{m: 1, flex: 2}}
              label="Desarrollo"
              value={loadedData.length?loadedData.length:undefined}
              disabled={!editing}
              onChange={handleChange}
              name="length"
            />
            <TextField
              sx={{m: 1, flex: 4}}
              label="Regulaciones"
              value={loadedData.regulations?loadedData.regulations:undefined}
              disabled={!editing}
              onChange={handleChange}
              name="regulations"
            />
          </Box>
          <Box>
            <TextField
              label="Descripción"
              sx={{m: 1}}
              value={loadedData.description?loadedData.description:undefined}
              disabled={!editing}
              onChange={handleChange}
              name="description"
              multiline
              fullWidth
            />
          </Box>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded={false}>
        <AccordionSummary expandIcon={<ArrowDownwardIcon />}>
          <Typography>Datos de localización</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={{display: 'flex'}}>
            <TextField
              sx={{m: 1, flex: 1}}
              label="Coordenada X"
              value={loadedData.x_coord?loadedData.x_coord:undefined}
              disabled={!editing}
              onChange={handleChange}
              name="x_coord"
            />
            <TextField
              sx={{m: 1, flex: 1}}
              label="Coordenada Y"
              value={loadedData.y_coord?loadedData.y_coord:undefined}
              disabled={!editing}
              onChange={handleChange}
              name="y_coord"
            />
            <TextField
              sx={{m: 1, flex: 1}}
              label="Altitud"
              value={loadedData.z_coord?loadedData.z_coord:undefined}
              disabled={!editing}
              onChange={handleChange}
              name="z_coord"
            />
            <TextField
              sx={{m: 1, flex: 1}}
              label="Formato"
              value={loadedData.coord_format?loadedData.coord_format:undefined}
              disabled={!editing}
              onChange={handleChange}
              name="coord_format"
            />
            <TextField
              sx={{m: 1, flex: 1}}
              label="Proyección"
              value={loadedData.coord_proyec?loadedData.coord_proyec:undefined}
              disabled={!editing}
              onChange={handleChange}
              name="coord_proyec"
            />
          </Box>
          <Box sx={{display: 'flex'}}>
            <TextField
              sx={{m: 1, flex: 1}}
              label="Municipio"
              value={loadedData.municipality?loadedData.municipality:undefined}
              disabled={!editing}
              onChange={handleChange}
              name="municipality"
            />
            <TextField
              sx={{m: 1, flex: 1}}
              label="Localidad"
              value={loadedData.locality?loadedData.locality:undefined}
              disabled={!editing}
              onChange={handleChange}
              name="locality"
            />
            <TextField
              sx={{m: 1, flex: 1}}
              label="Toponimía"
              value={loadedData.toponymy?loadedData.toponymy:undefined}
              disabled={!editing}
              onChange={handleChange}
              name="toponymy"
            />
            <TextField
              sx={{m: 1, flex: 1}}
              label="Macizo"
              value={loadedData.massif?loadedData.massif:undefined}
              disabled={!editing}
              onChange={handleChange}
              name="massif"
            />
          </Box>
        </AccordionDetails>
      </Accordion>
    </>
  )
}

export default CaveDetailLayout
