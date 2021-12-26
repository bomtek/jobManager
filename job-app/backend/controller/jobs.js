const { create } = require("../model/job");
const Job = require("../model/job")


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
        const newJob = await Job.create(req.body)
        res.status(201).json({newJob})
        
    } catch (error) {

        res.status(500).json({message:error})
        
    }

   
}

const updateJob = (req,res) => {
    res.send('Update Job')
}

const deleteJob = async (req,res) => {

    try {
        const {id: jobOrg} = req.params;
        const data = await Job.findOneAndDelete({organisation:jobOrg});

        if(!data){
            return res.status(404).json({msg: "Data not Found"});
        }

        res.status(200).json({msg:`Data deleted for ${data}`})
    } catch (error) {
        res.status(500).json({msg:error})
    }
}

module.exports= {
    getAllJobs,
    getJob,
    createJob,
    updateJob,
    deleteJob
}