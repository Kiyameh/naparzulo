import mongoose from 'mongoose';

// Modelo de grupo/club
const groupSchema = new mongoose.Schema(
  {
    createdBy: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
    groupname: { type: String, required: true, trim: true },
    acronym: { type: String, trim: true },
    description: { type: String, trim: true },
    location: { type: String, trim: true },
    email: { type: String, trim: true },
    webpage: { type: String, trim: true },
    telephone: { type: Number, trim: true },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Group', groupSchema);
