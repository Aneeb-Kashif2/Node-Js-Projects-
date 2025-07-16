const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    
    course: {
        type: String,
        required : true,
    },
});


const userStructure = mongoose.model('student', studentSchema);

module.exports = userStructure;