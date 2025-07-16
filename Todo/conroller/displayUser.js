const user = require("../models/user");

async function displayUser(req, res) {
    try {
const users = await user.find(); 
        return res.render('showUsers' , {users});
                console.log("Users found:", users); // 👈 Add this

    }

    catch (err){
         console.log("user not found" , err)
    }
};

module.exports = {
    displayUser
}