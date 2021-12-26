const { create } = require("../model/job");
const Job = require("../model/job")
const getAllJobs = (req,res) => {
    res.send("Sending from Router Updated")
    };


const getJob = (req,res) => {
    res.json(req.params.id)
}

const createJob = async (req,res) => {

    const newJob = await Job.create(req.body)
    res.status(201).json({newJob})
}

const updateJob = (req,res) => {
    res.send('Update Job')
}

const deleteJob = (req,res) => {
    res.json({id: req.params.id})
}

module.exports= {
    getAllJobs,
    getJob,
    createJob,
    updateJob,
    deleteJob
}