// userRoutes.js
const express = require('express');
const { registerUser, getUser } = require('../controllers/userController');
const router = express.Router();

router.post('/register', registerUser);
router.get('/:walletAddress', getUser);

module.exports = router;
