// server/routes/jobRoutes.js
const express = require('express');
const router = express.Router();
const { createJob, getJobs, getJob } = require('../controllers/jobController');
const { protect } = require('../middleware/authMiddleware');

router.post('/', protect, createJob);
router.get('/', getJobs);
router.get('/:id', getJob);

module.exports = router;