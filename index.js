const express = require('express');
const port  = process.env.PORT || 8000;
const app = express();


const db = require('./config/mongoose');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', require('./routes'));

// connecting to the server
app.listen(port , (err)=>{

    if(err){console.log('Error : ', err)}

    console.log(`server is running on http://localhost:${port}`);
})