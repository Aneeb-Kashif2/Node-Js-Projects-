const { getUser } = require("../service/auth");
async function restrictToLoggedinUserOnly(req, res , next) {
    const userUId = req.cookies?.uid;


    if (!userUId) {
        return res.redirect("/login")
    }
    const user = getUser(userUId);
    if(!userUId){
                return res.redirect("/login")

    }

    req.user = user ;
    next();
}

module.exports = {
    restrictToLoggedinUserOnly,
}