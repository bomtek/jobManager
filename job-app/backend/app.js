const connectDB = require('../db/connection')
const express = require('express');
const jobs = require("./router/jobs"); // Importing jobs route 
require('dotenv').config();

const app = express();




// Connecting to Database and start listening to server after connection 
connectDB(process.env.MONGO_URI).then(() => {
    app.listen(3000 , () => {console.log("Listening to Port 3000 ....")})
}).catch((error) => {console.log(error)})






//Middleware to parse json reques
app.use(express.json());

// Creating default app route
app.use('/api/v1/jobs',jobs);






// Starting server after DB connection 

