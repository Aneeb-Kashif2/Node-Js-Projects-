const express = require('express');
const mongoose = require('mongoose');
const { connectToMongoDB } = require("./connect");
const cookieParser = require("cookie-parser");
const route = require("./routes/signupandLoginRoute");
const logicRoutes = require("./routes/studentLogicRoutes");
require('dotenv').config();

const MONGO_URL = process.env.URL;
const PORT = process.env.PORT

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.set("view engine", "ejs");
app.set("views", "./views");

app.use("/", logicRoutes);
app.use("/", route); 










connectToMongoDB(MONGO_URL)
    .then(() => {
        console.log("MONGO CONNECTED")
    });


app.listen(PORT, () => {
    console.log(`server is running at port ${PORT}`)
})