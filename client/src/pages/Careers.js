import React, { useState, useEffect } from "react";
import "./styles/Career.css";

const Careers = () => {
  const [jobs, setJobs] = useState([]);

  const getJobs = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/jobs"); // Backend API
      if (!response.ok) throw new Error("Failed to fetch jobs");

      const val = await response.json();
      setJobs(val);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };

  useEffect(() => {
    getJobs();
  }, []);

  return (
    <div className="careers-container page-container">
      <h1>Careers</h1>
      <p>WaysAhead Global is committed to excellence and to attracting and retaining the best talent...</p>

      <h2>Join Our Team</h2>
      <p>Explore open positions for Internships, Graduate Roles, and Experienced Professionals.</p>

      <br></br>
      <br></br>
      <h2>Job listings</h2>
      <div className="job-listings">
        {jobs.length > 0 ? (
          jobs.map((job) => (
            <div key={job._id} className="job-card">
              <h3>{job.Position}</h3>
              <p><strong>Location:</strong> {job.Location}</p>
              <p><strong>Openings:</strong> {job.Openings}</p>
              <p><strong>Experience:</strong> {job.Experience}</p>
              <a className="apply-now-btn" href={job?.ApplyNow || "#"} target="_blank" rel="noopener noreferrer">
                Apply Now
              </a>
            </div>
          ))
        ) : (
          <p>Loading job listings...</p>
        )}
      </div>
    </div>
  );
};

export default Careers;
