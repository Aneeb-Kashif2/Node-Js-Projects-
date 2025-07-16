const user = require("../models/user");

async function handleUser(req , res){
       const {name , email , password} = req.body;
       await user.create({
        name ,
        email,
        password,

       });
       return res.redirect('/');
}

module.exports = {
    handleUser
}