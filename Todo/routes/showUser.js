const express = require('express');
const {displayUser} = require('../conroller/displayUser') 
const isAdmin = require('../middlewares/isAdmin');
const authenticateJWT = require('../middlewares/authenticateJWT');
const router = express.Router(); // ✅ This line is missing in your file


router.get('/show', authenticateJWT, isAdmin, displayUser); // ✅ only admin can access

module.exports = router