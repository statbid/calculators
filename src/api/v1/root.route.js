'use strict'

import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import express from 'express'

const { Router } = express
const router = new Router()

const __dirname = dirname(fileURLToPath(import.meta.url))

const libPage = join(__dirname, '../../../views/lib')
const appPage = join(__dirname, '../../../views/pages/app')

router.use('/lib', express.static(libPage))
router.use('/app/home', express.static(appPage))

router.use('/app', (req, res, next) => res.redirect('/app/home'))
router.use('/', (req, res, next) => res.redirect('/app/home'))

export default router