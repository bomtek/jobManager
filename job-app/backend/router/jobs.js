const express = require('express');
const router = express.Router();
const {getAllJobs,getJob,createJob,deleteJob,updateJob} = require("../controller/jobs")



// Creating router to handle the requests 
router.route('/').get(getAllJobs).post(createJob);
router.route('/:id').patch(updateJob).delete(deleteJob).get(getJob);


module.exports = router;