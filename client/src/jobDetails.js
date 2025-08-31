// client/src/pages/JobDetails.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const response = await axios.get(`/api/jobs/${id}`);
        setJob(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchJob();
  }, [id]);

  if (!job) return <div>Loading...</div>;

  return (
    <div>
      <h1>{job.title}</h1>
      <p>{job.description}</p>
      <p>Location: {job.location}</p>
      <p>Type: {job.type}</p>
      <p>Company: {job.company}</p>
      <p>Posted By: {job.postedBy.name}</p>
      <button>
        <Link to={`/apply/${id}`}>Apply Now</Link>
      </button>
    </div>
  );
};

export default JobDetails;