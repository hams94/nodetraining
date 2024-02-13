const express = require('express')
const router = express.Router();
const departementController = require('../controller/departement.controller');

router.post('/',departementController.create);
router.get('/',departementController.getAll);

module.exports = router