const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const jobSchema = new Schema(

    {

    title:{
        type:String,
        require:[true,'title required'],
        trim:true

        
    },
    organisation:{
        type:String,
        require:true,
        trim:true
    },
    website:{
        type: String,
        required: true,
        trim:true
    },
    dueDate:{
        type: Date,
        require: false
    },
    status:{
        type: String,
        required:true
    },
    catagory:{
        type:String,
        required:true
    },
    discription:{
        type:String,
        required:false
    },
    experience:{
        type: Number,
        required:false
    },
    skills:{
        type:Array,
        required: false
    }})



const Job = mongoose.model('job',jobSchema);

module.exports = Job;
