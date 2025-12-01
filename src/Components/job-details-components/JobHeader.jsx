import React from 'react'
import { FaMapMarkerAlt, FaLightbulb } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './JobHeader.css'

function JobHeader({ job }) {
  return (
    <div className="job-header">
      <h1 className="job-title">{job.title}</h1>
      
      <div className="job-meta">
        <span className="job-posted">Posted {job.postedTime}</span>
        <span className="job-meta-separator">•</span>
        <div className="job-location">
          <FaMapMarkerAlt className="location-icon" />
          <span>{job.location}</span>
        </div>
      </div>

      <div className="specialized-tip">
        <FaLightbulb className="tip-icon" />
        <span className="tip-text">
          Specialized profiles can help you better highlight your expertise when submitting proposals to jobs like these. 
          <Link to="/create-profile" className="tip-link"> Create a specialized profile</Link>.
        </span>
      </div>
    </div>
  )
}

export default JobHeader
