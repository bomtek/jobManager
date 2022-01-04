const { create } = require("../model/job");
const Job = require("../model/job")
const User = require("../model/user");


const getAllJobs = async (req,res) => {

    try {
    
        const data = await Job.find({})
        res.status(200).json({data})
        
    } catch (error) {

        res.status(500).json({message:error})
        
    }
    };


const getJob = async (req,res) => {

    try {
        const {id: jobOrg} = req.params
        
        const data = await Job.findOne({organisation:jobOrg})

        if(!data) {
            return res.status(404).json({msg:'No Task Found'});
        }

        res.status(200).json({data})
         
    } catch (error) {

        res.status(500).json({msg:error})
        
    }
  
}

const createJob = async (req,res) => {


    
    try {
        const newJob = await Job.create(req.body.job)
       
        res.status(201).json({newJob})
        
    } catch (error) {

        res.status(500).json({message:error})
        
    }

   
}

const updateJob = async (req,res) => {

   
    
    try {
        
        const {id: jobId} = req.params;
       

        const data = await Job.findOneAndUpdate({_id:jobId}, req.body,{new:true , runValidators:true});

        if(!data) {
            return res.status(404).json({msg:`No job found`});
        }
        console.log(data);
        res.status(200).json({data});

    } catch (error) {

        res.status(500).json({msg:error})
        
    }
}

const deleteJob = async (req,res) => {

    try {
        const {id: jobOrg} = req.params;
        
        const data = await Job.findOneAndDelete({_id:jobOrg});

        if(!data){
            return res.status(404).json({msg: "Data not Found"});
        }

        res.status(200).json({msg:`Data deleted for ${data}`})
    } catch (error) {
        res.status(500).json({msg:error})
    }
}

const createUser = async (req,res) => {
    console.log(req.body)

    try {

        const data = await User.create(req.body);
        console.log(`data has beeen created`)
        res.status(201).json({data});
        
    } catch (error) {

        res.status(500).json({msg:error});
        
    }



}

module.exports= {
    getAllJobs,
    getJob,
    createJob,
    updateJob,
    deleteJob,
    createUser
}