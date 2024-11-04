const express = require('express');
const router = express.Router();
const { registerAdmin, loginAdmin } = require('../controllers/authController');

// Authentication routes
router.post('/register', registerAdmin); // For initial admin setup
router.post('/login', loginAdmin);

module.exports = router;
