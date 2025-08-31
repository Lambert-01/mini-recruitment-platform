// client/src/pages/Home.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get('/api/jobs');
        setJobs(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div>
      <h1>Job Listings</h1>
      <ul>
        {jobs.map((job) => (
          <li key={job._id}>
            <Link to={`/job/${job._id}`}>
              {job.title} - {job.company}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;