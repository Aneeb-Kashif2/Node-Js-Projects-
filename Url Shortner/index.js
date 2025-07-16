const express = require('express');
const mongoose = require('mongoose');
const path = require("path");
const cookieParser = require('cookie-parser');
const { connectToMongoDB } = require("./connect");
const URL = require("./models/url");
const urlRoute = require('./routes/url');
const staticRoute = require('./routes/staticRouter');
const userRoute = require("./routes/user");
const  {restrictToLoggedinUserOnly} = require('./middleware/auth')
const app = express();

// Set view engine and views path
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser())

// Routes
app.use('/', staticRoute);
app.use("/url", restrictToLoggedinUserOnly,  urlRoute);
app.use("/user", userRoute);

// Home route
// app.get("/", async (req, res) => {
//     const allUrls = await URL.find({});
//     return res.render("home", {
//         urls: allUrls,
//     });
// });

// Redirect route
app.get('/:shortId', async (req, res) => {
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate(
        { shortId },
        {
            $push: {
                visitHistory: {
                    timestamp: Date.now()
                }
            }
        }
    );

    res.redirect(entry.redirectUrl);
});

// Connect to DB and start server
connectToMongoDB('mongodb://localhost:27017/urlshortner')
    .then(() => {
        console.log("MOngo db connected ");
        const PORT = 8001;
        app.listen(PORT, () => {
            console.log(`server is running at port ${PORT}`);
        });
    });
