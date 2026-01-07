"use client";

import { useState, useEffect } from "react";
import ApplyforJob from "@/components/modal/ApplyforJob";

export default function JobPostClient() {
  const [open, setOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState("");
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch("/api/JobPostClient");
        const data = await res.json();

        if (data.success) {
          setJobs(data.data);
        } else {
          console.error("API Error:", data.error);
        }
      } catch (err) {
        console.error("Error fetching jobs:", err);
      }
    };

    fetchJobs();
  }, []);

  const handleApply = (job) => {
    setSelectedJob(job.JobTitle);
    setOpen(true);
  };

  return (
    <div style={{ paddingTop: "100px", paddingBottom: "10px", }}>


<div
  style={{
    textAlign: "center",
    fontSize: "20px",
    fontWeight: "bold",
    color: "#075722ff",
  }}
>
  <h3>Job Details</h3>
</div>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {jobs.length === 0 ? (
          <p style={{ textAlign: "center" }}>Loading jobs...</p>
        ) : (
          jobs.map((job) => (
  <li
    key={job.JobId}
  style={{
    width: "650px",
    margin: "5px auto",
    padding: "16px",
    border: "1px solid #f8d4d4ff",
    borderRadius: "10px",
    background: "#f9f9f9",

    display: "flex",
    flexDirection: "column",
    position: "relative",   // ⭐ important
  }}
>
  {/* 🔵 APPLY BUTTON — Right Top */}
  <button
    onClick={() => handleApply(job)}
    style={{
      padding: "8px 16px",
      background: "#0070f3",
      color: "white",
      border: "none",
      borderRadius: "6px",
      cursor: "pointer",
      position: "absolute",
      top: "15px",
      right: "15px",       // ⭐ Moves to top-right
    }}
  >
    Apply
  </button>

  {/* Job Title + Location + Company */}
  <p style={{ margin: 0, fontSize: "20px", fontWeight: "bold" }}>
    <strong style={{ paddingRight: "4px" }}>JobTitle:</strong> {job.JobTitle},{"  "}
    <strong style={{ paddingRight: "4px",paddingLeft :"3px" }}>Location:</strong> {job.Location},{"  "}
    <strong style={{ paddingRight: "4px",paddingLeft :"3px" }}>Company:</strong> {job.CompanyName}
  </p>

  {/* Vacancy + Experience */}
  <p style={{ margin: "5px" }}>
    <strong>Active Vacancies:</strong> {job.Active_Vacancy},{" "}
    <strong style={{ paddingRight: "4px",paddingLeft :"3px" }}>Experience:</strong>{" "}
    {job.Experience !== "freshers"
      ? `${job.Experience} Years`
      : "Freshers"}
  </p>

  {/* Work Details */}
  <p style={{ margin: "5px" }}>
    <strong>Job Description:</strong> {job.Work_Details}
  </p>
</li>

          ))
        )}
      </ul>

      <ApplyforJob
        open={open}
        handleClose={() => setOpen(false)}
        title="POST APPLYING FOR"
        subtitle={selectedJob}
      />
    </div>
  );
}
