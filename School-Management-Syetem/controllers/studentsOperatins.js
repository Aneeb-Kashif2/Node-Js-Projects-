const student = require("../models/studentSchema");

async function handleAddStudent(req, res) {
    try {
        const { name, email, course } = req.body;
        await student.create({ name, email, course });
res.redirect("/all-student");
    }
    catch (err) {
        console.error("Add Student Error:", err);
        res.status(500).send("Server Error");
    }
};

async function viewAllStudents(req, res) {
    try {
        const students = await student.find();
res.render("viewStudents", { students, role: req.user.role });
    }
    catch (err) {
        console.error("View Students Error:", err);
        res.status(500).send("Server Error");
    }
};


async function updateStudent ( req , res ) {
    try {
        const {name , email , course} = req.body;
        await student.findByIdAndUpdate(req.params.id , {
            name , email ,course
        });
        res.redirect("/all-student");
    }
    catch(err){
        console.error("Update Student Error:", err);
        res.status(500).send("Server Error");
    }
};


const deleteStudent = async (req, res) => {
    try {
        await student.findByIdAndDelete(req.params.id);
res.redirect("/all-student");
    } catch (err) {
        console.error("Delete Student Error:", err);
        res.status(500).send("Server Error");
    }
};


module.exports = {
    handleAddStudent,
    viewAllStudents,
    updateStudent,
    deleteStudent
}