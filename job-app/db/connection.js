
const mongoose  = require('mongoose');


const connectionString = "mongodb+srv://tekbam:BalmatlaB!420@jobmanager.efbcm.mongodb.net/Job-Manager?retryWrites=true&w=majority"


const connectDB = ()=> {
  
    return mongoose.connect(connectionString)

};


module.exports = connectDB;