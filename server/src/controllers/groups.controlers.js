import Group from '../models/Group.model.js';

// Tareas de consulta, edición, eliminación y actualización de grupos y clubes.

export const viewGroupList = async (req, res) => {
  const groupList = await Group.find();

  console.log(`<Moongose> Todos los grupos mostrados`);

  res.json(groupList);
};

export const addGroup = async (req, res) => {
  const {
    groupname,
    acronym,
    description,
    location,
    email,
    webpage,
    telephone,
  } = req.body;
  const newGroup = new Group({
    createdBy: req.user.id,
    groupname,
    acronym,
    description,
    location,
    email,
    webpage,
    telephone,
  });
  const savedGroup = await newGroup.save();

  console.log(`<Moongose> Grupo ${newGroup.groupname} creado`);

  res.json(savedGroup);

};

export const deleteGroup = async (req, res) => {
  const deletedGroup = await Group.findByIdAndDelete(req.params.id);

  if (!deletedGroup) {
    return res.status(404).json({ message: '<Moongose> Grupo no encontrado' });
  }

  console.log(`<Moongose> Grupo ${deletedGroup.groupname} eliminado`);

  return res.sendStatus(204);
};

export const editGroup = async (req, res) => {
  const updatedGroup = await Group.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!updatedGroup) {
    return res.status(404).json({ message: '<Moongose> Grupo no encontrado' });
  }
  console.log(`<Moongose> Grupo ${updatedGroup.groupname} actualizado`);

  res.json(updatedGroup);
};

export const viewGroup = async (req, res) => {

  const foundGroup = await Group.findById(req.params.id);
  if (!foundGroup) {
    return res.status(404).json({ message: '<Moongose> Grupo no encontrado' });
  }
  console.log(`<Moongose> Grupo ${foundGroup.groupname} mostrado`);

  res.json(foundGroup);
};
