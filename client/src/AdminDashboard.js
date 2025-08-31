// client/src/pages/AdminDashboard.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [jobs, setJobs] = useState([]);
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get('/api/admin/jobs');
        setJobs(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchApplications = async () => {
      try {
        const response = await axios.get('/api/admin/applications');
        setApplications(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchJobs();
    fetchApplications();
  }, []);

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <h2>Jobs</h2>
      <ul>
        {jobs.map((job) => (
          <li key={job._id}>{job.title} - {job.company}</li>
        ))}
      </ul>
      <h2>Applications</h2>
      <ul>
        {applications.map((app) => (
          <li key={app._id}>
            {app.user.name} applied for {app.job.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;