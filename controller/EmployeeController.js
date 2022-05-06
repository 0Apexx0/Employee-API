const Employee = require('../models/employee_schema');

module.exports.createEmployee = async (req,res)=>{
    try {
        console.log(req.body.name);
        const newEmployee = new Employee({
            name : req.body.name || 'not defined',
            age : req.body.age || 0 ,
            department : req.body.department || 'not defined',
            password : req.body.password || 'not defined',
            email : req.body.email || 'not defined'
        });
         
        
        await newEmployee.save();
        if(newEmployee.age == 0 || newEmployee.department == 'not defined' || newEmployee.password == 'not defined' || newEmployee.email == 'not defined' || newEmployee.name == 'not defined' ){
            res.status(400).send( "please fill all the field (i.e : name , email , age , department, password)");
            return

        }
        res.status(201).send( newEmployee)
    } catch (err) {
        console.log(err);
        res.status(400).send({ message: "error" })
    }
}

module.exports.fetchEmployees = async (req,res)=>{
    try {
        const EmployeeData = await Employee.find()
        res.status(201).send(EmployeeData);

    } catch (err) {
        console.log(err);
        res.status(400).send({ message: "error" })
    }


} 

module.exports.loginEmployee = async (req,res)=>{
    try {
        const employeeData = await Employee.findOne({ email: req.params.email })
        if(employeeData== null){
            res.status(400).send("email not exist \n");
            return ;
        }
        // console.log(employeeData);
        res.status(201).send("Login Successfull \n");
    } catch (err) {
        console.log(err);
        res.status(400).send({ message: "error" })
    }


}

module.exports.updateEmployee = async (req,res)=>{

    try {
        const employeeData = await Employee.findOneAndUpdate({ email: req.params.email }, req.body);
        if(employeeData == null){
            res.status(400).send("employee not exist");
            return
        }
        res.status(201).send(  employeeData);
    } catch (err) {
        console.log(err);
        res.status(400).send({ message: "error" })
    }

} 



module.exports.deleteEmployee = async (req,res)=>{

    try {
        const employeeData = await Employee.findOneAndDelete({ email: req.params.email }, req.body);
        if(employeeData == null){
            res.status(400).send("employee not exist");
            return
        }
        console.log(employeeData);
        res.status(201).send(employeeData);
    } catch (err) {
        console.log(err);
        res.status(400).send({ message: "error" })
    }

}