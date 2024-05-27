// Modelos de columnas para cargar en el DataGrid según datos mostrados

export const cavesColumns = [
  {
    field: 'id',
    headerName: 'ID',
    flex: 1,
    type: 'number',
    renderHeader: () => null,
  },
  {
    field: 'catalog',
    headerName: 'Catalogo',
    description: 'Código del catalogo espeleologico de Navarra',
    flex: 2,
  },
  {
    field: 'initials',
    headerName: 'Siglas',
    description: 'Siglas de exploración',
    flex: 2,
  },
  {
    field: 'cavename',
    headerName: 'Nombre',
    flex: 7,
  },
  {
    field: 'system',
    headerName: 'Sistema',
    description: 'Sistema al que pertenece la cavidad',
    flex: 5,
  },
  {
    field: 'type',
    headerName: 'Tipo',
    description: 'Tipo de cavidad',
    flex: 3,
  },
  {
    field: 'depth',
    headerName: 'Profundidad',
    flex: 2,
    type: 'number',
  },
  {
    field: 'length',
    headerName: 'Desarrollo',
    flex: 2,
    type: 'number',
  },
  {
    field: 'regulations',
    headerName: 'Prohibiciones',
    flex: 2,
  },
]
export const groupsColumns = [
  {
    field: 'id',
    headerName: 'ID',
    flex: 1,
    type: 'number',
    renderHeader: () => null,
  },
  {
    field: 'acronym',
    headerName: 'Acrónimo',
    description: 'Acrónimo del grupo',
    flex: 2,
  },
  {
    field: 'groupname',
    headerName: 'Nombre',
    flex: 5,
  },
  {
    field: 'location',
    headerName: 'Localización',
    description: 'Localización del grupo',
    flex: 8,
  },
  {
    field: 'email',
    headerName: 'Correo',
    description: 'Información de contacto',
    flex: 4,
  },
  {
    field: 'webpage',
    headerName: 'Página web',
    description: 'Página web',
    flex: 4,
  },
  {
    field: 'caves',
    headerName: 'Cavidades',
    flex: 4,
  },
]
export const systemsColumns = [
  {
    field: 'id',
    headerName: 'ID',
    flex: 1,
    type: 'number',
    renderHeader: () => null,
  },
  {
    field: 'catalog',
    headerName: 'Catalogo',
    description: 'Código del catalogo espeleologico de Navarra',
    flex: 2,
  },
  {
    field: 'systemname',
    headerName: 'Nombre',
    flex: 3,
  },
  {
    field: 'caves',
    headerName: 'Cavidades',
    flex: 7,
  },
  {
    field: 'massif',
    headerName: 'Macizo',
    description: 'Macizo montañoso',
    flex: 3,
  },
  {
    field: 'length',
    headerName: 'Desarrollo',
    description: 'Desarrollo',
    flex: 2,
  },
  {
    field: 'depth',
    headerName: 'Profundidad',
    flex: 2,
    type: 'number',
  },
]

