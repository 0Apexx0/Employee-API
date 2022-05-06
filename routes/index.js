const express = require('express');
const router = express.Router();
const employeeController = require('../controller/EmployeeController')

router.get('/' , (req,res)=>{
    res.header('Content-type', 'text/html');
    return res.end('<h1>Get Started :</h1><ul><li>Open Postman start sending request on "(above url)/product</li></ul>');
});

//create a new employee
router.post('/employee', employeeController.createEmployee );

//fetch all employee
router.get('/employee', employeeController.fetchEmployees) 
    
// fetch one employee
router.get('/employee/:email', employeeController.loginEmployee ) 
   
// // fetch one employee and update
router.put('/employee/:email', employeeController.updateEmployee) 

// //delete a employee
router.delete('/employee/:email', employeeController.deleteEmployee ); 



module.exports = router;