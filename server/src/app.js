import express from 'express'
import morgan from 'morgan'
import authRoutes from './routes/auth.routes.js'
import caveRoutes from './routes/cave.routes.js'
import groupRoutes from './routes/group.routes.js'
import systemRoutes from './routes/system.routes.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'

// Inicializar app express:
const app = express()

// MIDDLEWARES
// Usar app morgan (muestra peticiones al servidor por consola, solo en desarrollo)
app.use(morgan('dev'))

// Interpretar formatos JSON para Express
app.use(express.json())

// Interprete de cookies:
app.use(cookieParser())

// Gestor politica CORS:
app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
  })
)

// Usar enrutador de autentificación
app.use(authRoutes)

// Usar enrutador de tareas de cuevas:
app.use(caveRoutes)
// Usar enrutador de tareas de grupos:
app.use(groupRoutes)
// Usar enrutador de tareas de sistemas:
app.use(systemRoutes)

export default app