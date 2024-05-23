// Generar token de JsonWebToken

import jwt from 'jsonwebtoken';
import { LOGIN_TOKEN_SECRET as secret } from '../config.js';

// Crear token de acceso mediante modulo jsonWebtokens
export function createAccessToken(payload) {
  return new Promise((resolve, reject) => {
    jwt.sign(
      payload, // Cuerpo del token
      secret, // Clave de cifrado
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
