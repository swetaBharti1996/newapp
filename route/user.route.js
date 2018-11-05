const express = require('express');
const router = express.Router();
const user_controller = require('../controllers/user.controllers');

router.post('/test', user_controller.test);

module.exports = router;