
const getAllJobs = (req,res) => {
    res.send("Sending from Router Updated")
    };


const getJob = (req,res) => {
    res.json(req.params.id)
}

const createJob = (req,res) => {
    
    console.log(req.body)
    res.json(req.body)
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