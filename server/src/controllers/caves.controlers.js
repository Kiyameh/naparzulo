import Cave from '../models/Cave.model.js';

// Tareas de consulta, edición, eliminación y actualización de cavidades:

export const viewCaveList = async (req, res) => {
  const caveList = await Cave.find();

  console.log(`<Moongose> Todas las cavidades mostradas`);

  res.json(caveList);
};

export const addCave = async (req, res) => {
  const {
    dataSource,
    catalog,
    initials,
    cavename,
    alt_cavename,
    description,
    type,
    regulations,
    length,
    depth,
    system,
    x_coord,
    y_coord,
    z_coord,
    coord_proyec,
    coord_format,
    municipality,
    locality,
    toponymy,
    massif
  } = req.body;
  const newCave = new Cave({
    createdBy: req.user.id,
    dataSource,
    catalog,
    initials,
    cavename,
    alt_cavename,
    description,
    type,
    regulations,
    length,
    depth,
    system,
    x_coord,
    y_coord,
    z_coord,
    coord_proyec,
    coord_format,
    municipality,
    locality,
    toponymy,
    massif
  });


  const savedCave = await newCave.save();

  console.log(`<Moongose> Cueva ${newCave.cavename} creada`);

  res.json(savedCave);
};

export const deleteCave = async (req, res) => {
  const deletedCave = await Cave.findByIdAndDelete(req.params.id);

  if (!deletedCave) {
    return res.status(404).json({ message: '<Moongose> Cueva no encontrada' });
  }

  console.log(`<Moongose> Cueva ${deletedCave.cavename} eliminada`);

  return res.sendStatus(204);
};

export const editCave = async (req, res) => {
  const updatedCave = await Cave.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!updatedCave) {
    return res.status(404).json({ message: '<Moongose> Cueva no encontrada' });
  }
  console.log(`<Moongose> Cueva ${updatedCave.cavename} actualizada`);

    res.json(updatedCave);
};

export const viewCave = async (req, res) => {

  const foundCave = await Cave.findById(req.params.id);
  if (!foundCave) {
    return res.status(404).json({ message: '<Moongose> Cueva no encontrada' });
  }

  console.log(`<Moongose> Cueva ${foundCave.cavename} mostrada`);

  res.json(foundCave);
};
