import app from './app.js';
import { connectDB } from './db.js';

connectDB();
app.listen(3000);
console.log('<Node> Server iniciado en puerto', 3000);
