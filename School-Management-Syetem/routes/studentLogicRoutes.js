const express = require("express");
const student = require("../models/studentSchema");
const islogin = require("../middleware/checkIsLogin");
const isAdmin = require("../middleware/checkAdmin")

const routes = express.Router();

const { handleAddStudent, viewAllStudents,updateStudent, deleteStudent } = require("../controllers/studentsOperatins");



routes.get("/all-student", islogin,  viewAllStudents)

routes.get("/add-student", islogin, (req, res) => {
    res.render("addStudent");
});



routes.get("/delete-student/:id" , islogin,isAdmin ,  deleteStudent);

routes.post("/add-student", islogin, isAdmin ,  handleAddStudent);
routes.post("/edit-student/:id", islogin,  updateStudent);

routes.get("/edit-student/:id", islogin, async (req, res) => {
    try {
        const studentToEdit = await student.findById(req.params.id);
        res.render("editStudent", { student: studentToEdit });
    } catch (err) {
        console.error("Edit Student View Error:", err);
        res.status(500).send("Server Error");
    }
});



module.exports = routes;