const express = require('express')
const router = express.Router()

const typeController = require('../controller/type.controller')

router.get('/type', typeController.getAllTypes)
router.get('/type/:id', typeController.getTypeById)
router.post('/type', typeController.createType)
router.put('/type/:id', typeController.updateType)
router.delete('/type/:id', typeController.deleteType)

module.exports = router