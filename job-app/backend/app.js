const connectDB = require('../db/connection')
const express = require('express');
const jobs = require("./router/jobs"); // Importing jobs route 

 const cors = require('cors');
require('dotenv').config();

const app = express();




// Connecting to Database and start listening to server after connection 
connectDB(process.env.MONGO_URI).then(() => {
    app.listen(3001 , () => {console.log("Listening to Port 3001 ....")})
}).catch((error) => {console.log(error)})






//Middleware to parse json reques
app.use(express.json());

app.use(cors());

// Creating default app route

app.use('/api/v1/jobs',jobs);
app.use('/api/v1/user',jobs)







// Starting server after DB connection 

