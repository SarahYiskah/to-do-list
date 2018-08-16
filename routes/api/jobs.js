const express = require('express')
const router = express.Router()

//bring in model to make queries
const Job = require('../../models/Job')

//create routes

//@route GET api/jobs
//@description GET ALL Jobs
//@access Public
router.get('/', (req, res) => {
  Job.find()
    .sort({date: -1})
    .then(jobs => res.json(jobs))
})

//@route POST api/jobs
//@description Create new job
//@access Public
router.post('/', (req, res) => {
  const newJob = new Job({
    name: req.body.name
  })
  newJob.save()
    .then(job => res.json(job))
})

//@route DELETE api/jobs
//@description Delete a job
//@access Public
router.delete('/:id', (req, res) => {
  Job.findById(req.params.id)
    .then(job => job.remove().then(() => res.json({success: true})))
    .catch(err => res.status(404).json({success: false}))
})

module.exports = router
