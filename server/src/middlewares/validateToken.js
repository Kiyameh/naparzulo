// Validación de un token de JsonWebToken

import jwt from 'jsonwebtoken';

export const checkAuthentication = (req, res, next) => {
  // Recibir token de los cookies del navegador:
  const { token } = req.cookies;

  // Verificaar si hay token:
  if (!token) {
    return res.status(401).json({ message: '<JWT> Necesario iniciar sesión' });
  }

  // Extraer id de usuario del token:
  jwt.verify(token, process.env.LOGIN_TOKEN_SECRET, (error, decodedToken) => {
    if (error) {
      return res.status(403).json({ message: '<JWT> Token invalido' });
    }

    // Insertar id decodificado en req.user para usar en controlers de autentificación.
    req.user = decodedToken;

    next();
  });
};
