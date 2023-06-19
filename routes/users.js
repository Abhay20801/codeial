const express = require('express');

const router = express.Router();
const usersController = require('../controllers/users_controller');

// router.get('/', usersController.profile);   // If only /users comes

router.get('/profile', usersController.profile);



module.exports = router;