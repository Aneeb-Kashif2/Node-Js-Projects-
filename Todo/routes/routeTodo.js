const express = require('express');
const router = express.Router();
const { displayTodo } = require('../conroller/displayTodo');
const authenticateJWT = require('../middlewares/authenticateJWT');

router.get('/todo', authenticateJWT, displayTodo);

module.exports = router;
