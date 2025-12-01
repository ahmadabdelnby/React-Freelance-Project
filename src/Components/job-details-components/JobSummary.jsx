import React from 'react'
import './JobSummary.css'

function JobSummary({ job }) {
  return (
    <div className="job-summary">
      <h3 className="summary-heading">Summary</h3>
      <p className="summary-text">{job.summary}</p>

      {job.deliverables && job.deliverables.length > 0 && (
        <div className="deliverables-section">
          <h4 className="deliverables-heading">Deliverables:</h4>
          <ul className="deliverables-list">
            {job.deliverables.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {job.description && (
        <div className="description-section">
          <p className="description-text">{job.description}</p>
        </div>
      )}
    </div>
  )
}

export default JobSummary
