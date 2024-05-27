import mongoose from 'mongoose';

// Modelo de cueva
const caveSchema = new mongoose.Schema(
  {
    // Metadata
    createdBy: { type: mongoose.Schema.ObjectId, ref: 'User' },
    dataSource: { type: String, trim: true },
    // General data
    catalog: { type: String, unique: true, trim: true },
    initials: { type: String, trim: true },
    cavename: { type: String, trim: true },
    alt_cavename: { type: String, trim: true },
    description: { type: String, trim: true },
    type: { type: String, trim: true },
    regulations: { type: String, trim: true },
    length: { type: Number, trim: true },
    depth: { type: Number, trim: true },
    system: { type: String, trim: true },
    // Location data
    x_coord: { type: Number, required: true },
    y_coord: { type: Number, required: true },
    z_coord: { type: Number, trim: true },
    coord_proyec: { type: String, trim: true },
    coord_format: { type: String, trim: true },
    municipality: { type: String, trim: true },
    locality: { type: String, trim: true },
    toponymy: { type: String, trim: true },
    massif: { type: String, trim: true },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Cave', caveSchema);
