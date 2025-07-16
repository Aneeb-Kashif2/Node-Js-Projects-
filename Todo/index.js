const express = require('express');
const mongoose = require('mongoose');
const { connectToMongoDB } = require("./connect");
const signupRouter = require('./routes/signup');
const showUsers = require('./routes/showUser');
const signupPageRouter = require('./routes/signupPage');
const displayTodo = require("./routes/routeTodo");
const login = require('./routes/login');
const cookieParser = require("cookie-parser");



const PORT = 8000;

const app = express();

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing form data

app.use(cookieParser());

app.set("view engine", "ejs");
app.set("views", "./views");


app.use("/", signupPageRouter);
app.use("/", login);
app.post("/signup", signupRouter);
app.get("/show", showUsers);
app.get("/todo", displayTodo);
app.get("/login", login)

connectToMongoDB('mongodb://localhost:27017/datahandling')
    .then(() => {
        console.log("MONGO CONNECTED")
    });


app.listen(PORT, () => {
    console.log(`server is running at port ${PORT}`)
})