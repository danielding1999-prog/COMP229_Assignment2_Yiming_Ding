import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import compress from 'compression'
import cors from 'cors'
import helmet from 'helmet'
import router from './assets-router.js'
import contactRoutes from './routes/contact.routes.js'
import educationRoutes from './routes/Education.routes.js'
import projectRoutes from './routes/project.routes.js'
import userRoutes from './routes/user.routes.js'
import authRoutes from './routes/auth.routes.js'
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(compress())
app.use(helmet())
app.use(cors())
app.use('/', router)
app.use('/', contactRoutes)
app.use('/', educationRoutes)
app.use('/', projectRoutes)
app.use('/', userRoutes)
app.use('/', authRoutes)
export default app