import { Router } from 'express';
// Middleware que comprueba el token de authentificación recibido: 
import { checkAuthentication } from '../middlewares/validateToken.js';
// Controladores de petición de cavidades: 
import {
  viewCaveList,
  addCave,
  deleteCave,
  editCave,
  viewCave
} from '../controllers/caves.controlers.js';


const caveRoutes = Router();

caveRoutes.get('/caves', viewCaveList);
caveRoutes.get('/cave/:id', checkAuthentication, viewCave); 
caveRoutes.delete('/cave/:id', checkAuthentication, deleteCave);
caveRoutes.post('/cave', checkAuthentication, addCave);
caveRoutes.put('/cave/:id', checkAuthentication, editCave);



// TO-DO: Validación back-end de la cavidad creada: 
//  caveRoutes.post('/cave', checkAuthentication, validateSchema( - CREAR ESQUEMA - ), addCave);

// TO-DO: Validación back-end de la cavidad editada: 
// caveRoutes.put('/cave/:id', checkAuthentication, validateSchema( - CREAR ESQUEMA - ), editCave);

export default caveRoutes;
