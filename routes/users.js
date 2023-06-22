const express = require('express');

const router = express.Router();
const usersController = require('../controllers/users_controller');

// router.get('/', usersController.profile);   // If only /users comes

router.get('/profile', usersController.profile);

// Routes for signin and sign up
router.get('/sign-up',usersController.signUp);
router.get('/sign-in',usersController.signIn);

// Route for the form action sign up
router.post('/create',usersController.create);



module.exports = router;