const express = require('express');
const router = express.Router();
const {handleUser} = require("../conroller/userSignup");

router.post('/signup' , handleUser);

module.exports = router;
