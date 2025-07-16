const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        name : {
            type : String,
            required : true,
        },
        email : {
            type : String,
            required : true,
            unique : true,
        },
        password : {
            type : String,
            required : true,
        },
        role : {
            type : String,
            enum: ['user', 'admin'],
            default: 'user',
        },
    }
);

const userStructure = mongoose.model('user' , userSchema);

module.exports = userStructure;

