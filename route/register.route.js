const express = require('express');
const router = express.Router();
const register_controller = require('../controllers/register.controllers');

router.post('/test', register_controller.test);

module.exports = router;