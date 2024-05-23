const cave = {
  metaData: {
    id: Id(),
    createdBy: User(),
  },
  generalData: {
    catalog: String(),
    initials: String(),
    cavename: String(),
    alt_cavename: String(),
    type: String(),
    depth: Number(),
    system: System(),
    length: Number(), 
    regulations: String(),
    description: String(),
  },
  locationData: {
    x_coord: Number(),
    y_coord: Number(),
    z_coord: Number(),
    coord_proyec: String(),
    coord_format: String(),
    municipality: String(),
    locality: String(),
    massif: String(),
  },
};
