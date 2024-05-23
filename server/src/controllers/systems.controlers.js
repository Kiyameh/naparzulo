import System from '../models/System.model.js';

// Tareas de consulta, edición, eliminación y actualización de sistemas.

export const viewSystemList = async (req, res) => {
  const systemList = await System.find();

  console.log(`<Moongose> Todos los sistemas mostrados`);

  res.json(systemList);
};

export const addSystem = async (req, res) => {
  const {
    dataSource,
    catalog,
    systemname,
    alt_systemname,
    description,
    caves,
    massif,
    length,
    depth,
  } = req.body;
  const newSystem = new System({
    createdBy: req.user.id,
    dataSource,
    catalog,
    systemname,
    alt_systemname,
    description,
    caves,
    massif,
    length,
    depth,
  });
  const savedSystem = await newSystem.save();

  console.log(`<Moongose> Sistema ${newSystem.systemname} creado`);

  res.json(savedSystem);

};

export const deleteSystem = async (req, res) => {
  const deletedSystem = await System.findByIdAndDelete(req.params.id);

  if (!deletedSystem) {
    return res.status(404).json({ message: '<Moongose> Sistema no encontrado' });
  }

  console.log(`<Moongose> Sistema ${deletedSystem.systemname} eliminado`);

  return res.sendStatus(204);
};

export const editSystem = async (req, res) => {
  const updatedSystem = await System.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!updatedSystem) {
    return res.status(404).json({ message: '<Moongose> Sistema no encontrado' });
  }
  console.log(`<Moongose> Sistema ${updatedSystem.systemname} actualizado`);

  res.json(updatedSystem);
};

export const viewSystem = async (req, res) => {

  const foundSystem = await System.findById(req.params.id);
  if (!foundSystem) {
    return res.status(404).json({ message: '<Moongose> Sistema no encontrado' });
  }
  console.log(`<Moongose> Sistema ${foundSystem.systemname} mostrado`);

  res.json(foundSystem);
};
