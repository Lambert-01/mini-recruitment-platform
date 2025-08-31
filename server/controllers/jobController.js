// server/controllers/jobController.js
const Job = require('../models/Job');

const createJob = async (req, res) => {
  const { title, description, location, type, company } = req.body;

  try {
    const job = new Job({
      title,
      description,
      location,
      type,
      company,
      postedBy: req.user.id,
    });

    await job.save();
    res.json(job);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

const getJobs = async (req, res) => {
  try {
    const jobs = await Job.find().populate('postedBy', ['name']);
    res.json(jobs);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

const getJob = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id).populate('postedBy', ['name']);
    if (!job) {
      return res.status(404).json({ msg: 'Job not found' });
    }
    res.json(job);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

module.exports = {
  createJob,
  getJobs,
  getJob,
};