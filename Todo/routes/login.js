const express = require('express');
const routers = express.Router();
const {handleLogin} = require('../conroller/loginController');

routers.get("/login" , (req , res) =>{
     res.render("login");
} );

routers.post('/login', handleLogin);

module.exports = routers;