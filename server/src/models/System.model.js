import mongoose from 'mongoose';

// Modelo de cueva
const systemSchema = new mongoose.Schema(
  {
    // Metadata
    createdBy: { type: mongoose.Schema.ObjectId, ref: 'User' },
    dataSource: { type: String, trim: true },
    // General data
    catalog: { type: String, unique: true, trim: true },
    systemname: { type: String, required: true, trim: true },
    alt_systemname: { type: String, trim: true },
    description: { type: String, trim: true },
    caves: { type: String, trim: true },
    massif: { type: String, trim: true },
    length: { type: Number, trim: true },
    depth: { type: Number, trim: true },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('System', systemSchema);
