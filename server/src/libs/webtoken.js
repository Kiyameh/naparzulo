// Generar token de JsonWebToken
import jwt from 'jsonwebtoken';

// Crear token de acceso mediante modulo jsonWebtokens
export function createAccessToken(payload) {
  return new Promise((resolve, reject) => {
    jwt.sign(
      payload, // Cuerpo del token
      process.env.LOGIN_TOKEN_SECRET, // Clave de cifrado
      { expiresIn: '1d' }, // Opciones del token
      (error, token) => {
        if (error) {
          reject(error); // Promesa rechazada
        } else {
          resolve(token); // Promesa resuelta
        }
      }
    );
  });
}
