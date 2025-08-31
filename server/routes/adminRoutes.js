// server/routes/adminRoutes.js
const express = require('express');
const router = express.Router();
const { getAllJobs, getAllApplications } = require('../controllers/adminController');
const { protect, authorize } = require('../middleware/authMiddleware');

router.get('/jobs', protect, authorize('admin'), getAllJobs);
router.get('/applications', protect, authorize('admin'), getAllApplications);

module.exports = router;