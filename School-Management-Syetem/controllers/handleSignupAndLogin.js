const User = require("../models/UserSchema");

require("dotenv").config(); // Load environment variables



const jwt = require("jsonwebtoken");
const SECRET_KEY =process.env.SECRET_KEY;
async function handleUserSignup(req , res){
       const {name , email , password} = req.body;
       await User.create({
        name ,
        email,
        password,

       });
       return res.redirect('/all-student');
}

async function handleLogin(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({
        email,
        password,
    });
    if (!user) {
        return res.render("login", { error: "Invalid user name or password" });

    }
    const token = jwt.sign({ id: user._id, role: user.role }, SECRET_KEY, { expiresIn: "1h" })

    res.cookie("token", token, { httpOnly: true });
        console.log("Generated Token:", token);

    return res.redirect("/all-student")

};



module.exports = {
    handleUserSignup,
    handleLogin
}