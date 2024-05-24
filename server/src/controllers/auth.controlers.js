import User from '../models/User.model.js';
import bcrypt from 'bcryptjs';
import { createAccessToken } from '../libs/webtoken.js';
import jwt from 'jsonwebtoken'

// Tareas de consulta, edición, eliminación y actualización de usuarios.



export const register = async (req, res) => {
  // Recibir cuerpo de request register
  const { username, email, password, group } = req.body;

  try {
    // Encriptado de la pass con modulo bcrypt
    const passwordHash = await bcrypt.hash(password, 10);

    // Crear nuevo usuario usando modelo User
    const newUser = new User({ username, email, password: passwordHash, group });

    // Guardar nuevo usuario en la base de datos
    const savedUser = await newUser.save();

    // Generar token para sesión iniciada:
    const token = await createAccessToken({ id: savedUser._id });

    // Enviar cookie de login al front-end:
    res.cookie('token', token);

    // Enviar respuesta con los datos al front-end:
    res.json({
      id: savedUser._id,
      username: savedUser.username,
      email: savedUser.email,
      group: savedUser.group,
      role: savedUser.role,
      favs: savedUser.favs,
    });

    // Enviar respuesta de confirmación a consola:
    console.log(`<Moogonse> Usuario ${savedUser.username} registrado`);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  // Recibir cuerpo de request login
  const { email, password } = req.body;

  try {
    // Buscar usuario en la base de datos:
    const userFound = await User.findOne({ email });
    if (!userFound) {
      return res.status(400).json({ message: '<Moogonse> Usuario no encontrado' });
    }

    // Comparar password requerida con password base de datos
    const isMatch = await bcrypt.compare(password, userFound.password);
    if (!isMatch) {
      return res.status(400).json({ message: '<Moogonse> Email o contraseña incorrectos' });
    }

    // Generar token para sesión iniciada:
    const token = await createAccessToken({ id: userFound._id });

    // Enviar cookie de login al front-end:
    res.cookie('token', token);

    // Enviar respuesta con los datos al front-end:
    res.json({
      id: userFound._id,
      username: userFound.username,
      email: userFound.email,
      group: userFound.group,
      role: userFound.role,
      favs: userFound.favs,
    });

    // Enviar respuesta de confirmación a consola:
    console.log(`<Moogonse> Sesión de ${userFound.username} iniciada `);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const logout = async (req, res) => {
  // Enviar token vacio y que expiró en 1970
  res.cookie('token', '', {
    expires: new Date(0),
  });
  return res.sendStatus(200);
};

export const profile = async (req, res) => {
  // Comprobar si id generado por el middleware está en la base de datos:
  const userFound = await User.findById(req.user.id);

  if (!userFound) {
    return res.status(400).json({ message: '<Moogonse> Usuario no encontrado' });
  }

  // Devolver usuario si la comprobación es correcta.

  return res.json({
    id: userFound._id,
    username: userFound.username,
    email: userFound.email,
    group: userFound.group,
    role: userFound.role,
    favs: userFound.favs,
  });
};

export const verifyToken = async (req, res) =>{
  console.log(req)
  const {token} = req.cookies

  if(!token) return res.status(401).json({message: '<Moogonse> No hay token'})
  

  jwt.verify(token, process.env.LOGIN_TOKEN_SECRET, async (err, user)=>{
    if(err) return res.status(401).json({message: '<Moogonse> Token no valido'})

    const userFound = await User.findById(user.id)
    if(!userFound) return res.status(401).json({message: '<Moogonse> Usuario no valido'})

    return res.json({
      id: userFound._id,
      username: userFound.username,
      email: userFound.email,
    
    })

  })
  

}

