const jwt = require("jsonwebtoken");

require("dotenv").config(); // Load environment variables

const SECRET_KEY = process.env.SECRET_KEY;

function checkLogin(req , res , next) {
   const token = req.cookies.token;

   if(!token){
    return res.redirect("/login");
   }

   try{
    const decoded = jwt.verify(token , SECRET_KEY);
    req.user = decoded;
    next();
   }
   catch(err){
     return res.redirect("/login");
   }
}


module.exports = checkLogin;