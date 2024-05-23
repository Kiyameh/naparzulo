import { Router } from 'express';
// Middleware que comprueba el token de authentificación recibido: 
import { checkAuthentication } from '../middlewares/validateToken.js';
// Controladores de petición de grupos: 
import {
  viewGroupList,
  addGroup,
  deleteGroup,
  editGroup,
  viewGroup,
} from '../controllers/groups.controlers.js';


const groupRoutes = Router();

groupRoutes.get('/groups', viewGroupList);
groupRoutes.get('/group/:id', checkAuthentication, viewGroup); 
groupRoutes.delete('/group/:id', checkAuthentication, deleteGroup);
groupRoutes.post('/group', checkAuthentication, addGroup);
groupRoutes.put('/group/:id', checkAuthentication, editGroup);

// TO-DO: Validación back-end del grupo creado: 
//  groupRoutes.post('/group', checkAuthentication, validateSchema( - CREAR ESQUEMA - ), addGroup);

// TO-DO: Validación back-end del grupo editado: 
// groupRoutes.put('/group/:id', checkAuthentication, validateSchema( - CREAR ESQUEMA - ), editGroup);

export default groupRoutes;
