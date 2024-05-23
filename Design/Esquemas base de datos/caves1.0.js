const cave = {
  metaDada: {
    created_by: User(),
    data_source: String(),
  },
  generalData: {
    id: Id(),     // BASE DE DATOS
    catalog: String(),
    initials: String(),
    cavename: String(),
    alt_cavename: String(),
    type: String(),
    cave_system: System(),
    description: String(),
    alt_description: String(),
    keywords: [String()],
    regulations: String(),
    length: Number(),
    depth: Number(),
  },
  sportData: {
    approach: String(),
    path: [PatH()],
  },
  locationData: {
    x_coord: Number(),
    y_coord: Number(),
    coord_proyec: String(),
    coord_format: String(),
    z_coord: Number(),
    municipality: String(),
    locality: String(),
    toponymy: String(),
    massif: String(),
    georef_date: Date(),
    georef_author: Group(),
    georef_comment: String(),
  },
  explorationData: {
    first_explo_data: Date(),
    first_explo_group: Group(),
    explo_groups: [Group()],
    explo_history: String(),
  },
  scienceData: {
    geolog_age: String(),
    geolog_litology: String(),
    arqueolog: String(),
    paleontolog: String(),
    mineralog: String(),
    contamination: String(),
    biolog: String(),
    hidrolog_system: String(),
    hidrolog_subsystem: String(),
  },
  images:{
    
  }
};
