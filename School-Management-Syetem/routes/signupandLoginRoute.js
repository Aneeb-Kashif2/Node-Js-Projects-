const {handleUserSignup , handleLogin} = require("../controllers/handleSignupAndLogin");

const express = require("express");
const route = express.Router();

route.get("/signup" , (req , res) =>{
    res.render("signup");
});

route.post("/signup" , handleUserSignup);

route.get("/login" , (req , res) =>{
    res.render("login");
});


route.post ("/login" , handleLogin);


module.exports = route;
