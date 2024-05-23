import mongoose from 'mongoose';

const conectionURI =
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}Mgo$@subterradb.c0hrufd.mongodb.net/?retryWrites=true&w=majority`;
 

export const connectDB = async () => {
  try {
    await mongoose.connect(conectionURI);
    console.log('<Mongoose> DB conectada');
  } catch (error) {
    console.log(error);
  }
};
