const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/employee_api_db');
const db = mongoose.connection ;

db.on('error' , console.error.bind(console , "error connecting in database") );
db.once('open' , ()=> console.log('connected to the db successfully'))

module.exports = db ;