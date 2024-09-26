'use strict'

import express from 'express'
import morgan from 'morgan'
import root from './api/v1/root.route.js'

const app = express()

// middlewares
process.env.NODE_ENV != 'prod' && app.use(morgan('dev'))

// routes
app.use('/', root)
app.use((err, req, res, next) => {
  res.status(500).send("An unexpected error occured!!")
  next()
})

export default app