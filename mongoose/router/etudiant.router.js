const express = require('express')
const router = express.Router();
const etudiantController = require('../controller/etudiant.controller');


router.get('/',etudiantController.getAll)
router.post('/',etudiantController.create)
router.get('/:id',etudiantController.findById)

module.exports = router
