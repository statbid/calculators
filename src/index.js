'use strict'

import dotenv from 'dotenv'
import app from './server.js'

dotenv.config()
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`StatBid Calculator App is listening at ${PORT}`)
})


