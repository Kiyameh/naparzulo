import { Router } from 'express';
// Middleware que comprueba el token de authentificación recibido: 
import { checkAuthentication } from '../middlewares/validateToken.js';
// Controladores de petición de sistemas: 
import {
  viewSystemList,
  addSystem,
  deleteSystem,
  editSystem,
  viewSystem,
} from '../controllers/systems.controlers.js';


const systemRoutes = Router();

systemRoutes.get('/systems', viewSystemList);
systemRoutes.get('/system/:id', viewSystem); 
systemRoutes.delete('/system/:id', checkAuthentication, deleteSystem);
systemRoutes.post('/system', checkAuthentication, addSystem);
systemRoutes.put('/system/:id', checkAuthentication, editSystem);

// TO-DO: Validación back-end del sistema creado: 
//  systemRoutes.post('/system', checkAuthentication, validateSchema( - CREAR ESQUEMA - ), addSystem);

// TO-DO: Validación back-end del sistema editado: 
// systemRoutes.put('/system/:id', checkAuthentication, validateSchema( - CREAR ESQUEMA - ), editSystem);

export default systemRoutes;
