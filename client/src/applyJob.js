// client/src/pages/ApplyJob.js
import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';

const ApplyJob = () => {
  const { id } = useParams();
  const history = useHistory();
  const [resume, setResume] = useState('');
  const [coverLetter, setCoverLetter] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(
        '/api/jobs/apply',
        { job: id, resume, coverLetter },
        { headers: { 'x-auth-token': token } }
      );
      alert('Application submitted successfully');
      history.push('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Apply for Job</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="resume">Resume</label>
          <input
            type="file"
            id="resume"
            onChange={(e) => setResume(e.target.files[0])}
            required
          />
        </div>
        <div>
          <label htmlFor="coverLetter">Cover Letter</label>
          <textarea
            id="coverLetter"
            value={coverLetter}
            onChange={(e) => setCoverLetter(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit">Submit Application</button>
      </form>
    </div>
  );
};

export default ApplyJob;