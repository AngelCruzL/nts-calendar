import express from 'express'
import * as config from './config'
import authRoutes from './routes/auth.routes'

const app = express()

app.use('/api/auth',authRoutes)

app.listen(config.SERVER_PORT, () => {
  console.log('hi')
})