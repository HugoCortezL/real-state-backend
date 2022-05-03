const express = require('express')
const router = express.Router()

const typeController = require('../controller/type.controller')
const additionalController = require('../controller/additional.controller')

router.get('/type', typeController.getAllTypes)
router.get('/type/:id', typeController.getTypeById)
router.post('/type', typeController.createType)
router.put('/type/:id', typeController.updateType)
router.delete('/type/:id', typeController.deleteType)

router.get('/additional', additionalController.getAllAdditionals)
router.get('/additional/:id', additionalController.getAdditionalById)
router.post('/additional', additionalController.createAdditional)
router.put('/additional/:id', additionalController.updateAdditional)
router.delete('/additional/:id', additionalController.deleteAdditional)

module.exports = router