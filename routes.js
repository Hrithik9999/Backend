const express = require('express');
const router = express.Router();
const contactController = require('./Controller/user.controller');

// Define your routes here
router.post('/', contactController.contactAddFunction);
router.get('/', contactController.contactGetFunction);
router.get('/:id', contactController.contactGetSingleFunction);
router.put('/:id', contactController.contactUpdateFunction);
router.delete('/:id', contactController.contactDeleteFunction);

module.exports = router;