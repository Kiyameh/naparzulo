import { Router } from 'express';
// Controladoras de autentificación: 
import {
  register,
  login,
  logout,
  profile,
  verifyToken,
} from '../controllers/auth.controlers.js';
// Middleware que comprueba el token de authentificación recibido: 
import { checkAuthentication } from '../middlewares/validateToken.js';
// Middleware que valida un esquema: 
import { validateSchema } from '../middlewares/validateSchema.js';
// Esquemas de autentificación: 
import { registerSchema, loginSchema } from '../schemas/auth.schema.js';

const authRoutes = Router();

authRoutes.post('/auth/register', validateSchema(registerSchema), register);
authRoutes.post('/auth/login', validateSchema(loginSchema), login);
authRoutes.post('/auth/logout', logout);
authRoutes.get('/auth/profile', verifyToken);
authRoutes.get('/auth/verify', checkAuthentication, profile);

export default authRoutes;
