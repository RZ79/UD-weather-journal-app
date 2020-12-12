// Setup empty JS object to act as endpoint for all routes
  projectData = {};

// Require Express to run server and routes
const express = require('express');
const app = express();
/* Dependencies */
const bodyParser = require('body-parser');
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));
// Setup Server
const port = 8000;
const server = app.listen(port, ()=>{console.log(`running on localhost: ${port}`)})
// Callback to debug
// Callback function to complete GET '/all'
app.get('/all', sendData);

 function sendData (req,res) {
   res.send(projectData);
}
// Post Route
app.post('/add', addData);

function addData(req,res){
console.log(req.body);
newEntry = {
date: req.body.date,
temp: req.body.temp,
userRes: req.body.userRes
}
projectData = newEntry;
console.log(projectData);
}
