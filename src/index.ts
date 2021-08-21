import express from 'express'
import * as config from './config'

const app = express()

app.listen(config.SERVER_PORT, () => {
  console.log('hi')
})