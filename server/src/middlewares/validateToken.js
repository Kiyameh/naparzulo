// Validación de un token de JsonWebToken

import jwt from 'jsonwebtoken'

export const checkAuthentication = (req, res, next) => {
  // Recibir token de los cookies del navegador:

  console.log('<JWT> Verificando Token')
  const {token} = req.cookies
  
  // TO-DO : Corregir envío de token desde el cliente. Cuando eso este hecho retirar esta linea:
  next()

  // Verificaar si hay token:
  if (!token) {
    return res.status(401).json({message: '<JWT> Necesario iniciar sesión'})
  }

    // Extraer id de usuario del token:
  jwt.verify(token, process.env.LOGIN_TOKEN_SECRET, (error, decodedToken) => {
    if (error) {
      return res.status(403).json({message: '<JWT> Token invalido'})
    }

    // Insertar id decodificado en req.user para usar en controlers de autentificación.
    req.user = decodedToken

    next()
  })
}
