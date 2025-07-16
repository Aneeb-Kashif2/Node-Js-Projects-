const jwt = require("jsonwebtoken");
const SECRET_KEY = "aneebkashiftodo";

function authenticateJWT(req, res, next) {
  const token = req.cookies.token;

  if (!token) {
    return res.redirect("/login");
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.user = decoded; // store user info in request
    next();
  } catch (err) {
    return res.redirect("/login");
  }
}

module.exports = authenticateJWT;
