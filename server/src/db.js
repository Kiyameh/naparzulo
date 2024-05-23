import mongoose from 'mongoose';
import { DB_USER, DB_PASSWORD } from './config.js';

// URL conexión (PENDIENTE ENCRIPTAR CONTRASEÑA)
const conectionURI =
  `mongodb+srv://${DB_USER}:${DB_PASSWORD}Mgo$@subterradb.c0hrufd.mongodb.net/?retryWrites=true&w=majority`;
 

export const connectDB = async () => {
  try {
    await mongoose.connect(conectionURI);
    console.log('<Mongoose> DB conectada');
  } catch (error) {
    console.log(error);
  }
};
