import mongoose from 'mongoose';

// Modelo de usuario de la colección Users

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, trim: true },
    email: { type: String, require: true, unique: true, trim: true },
    password: { type: String, required: true },
    group: { type: String, required: false },
    role: {type: String, default: "guest"},
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('User', userSchema);
