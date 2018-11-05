const express = require('express');
const router = express.Router();
const user_controller = require('../controller/user.controller');

router.get('/test', user_controller.test);

router.post('/register', register_controller.test);

module.exports = router;