const User = require("../models/user");
const jwt = require("jsonwebtoken");
const SECRET_KEY = "aneebkashiftodo";


async function handleLogin(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({
        email,
        password,
    });
    if (!user) {
        return res.render("login")
        error: "Invalid user name or password "
    }
    const token = jwt.sign({ id: user._id, role: user.role }, SECRET_KEY, { expiresIn: "1h" })

    res.cookie("token", token, { httpOnly: true });
    return res.redirect("/todo")
    console.log("Generated Token:", token);

};

module.exports = {
    handleLogin
}