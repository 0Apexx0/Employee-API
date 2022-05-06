const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    name :{
        type : String
    },
    email :{
        type : String
    },
    password : {
        type : String
    },
    age : {
        type : Number
    },
    department : {
        type : String
    }
});

const Employee = mongoose.model('Employee' , employeeSchema);

module.exports = Employee ;