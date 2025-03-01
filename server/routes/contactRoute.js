import express from 'express'
import contactController from '../controller/contactController.js'

const route=express.Router()

// POST || create contact Route
route.post('/save-message',contactController)

export default route;