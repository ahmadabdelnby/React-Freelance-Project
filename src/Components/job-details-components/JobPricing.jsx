import React from 'react'
import { FaDollarSign, FaAward } from 'react-icons/fa'
import './JobPricing.css'

function JobPricing({ job }) {
  return (
    <div className="job-pricing">
      <div className="pricing-item">
        <FaDollarSign className="pricing-icon" />
        <div className="pricing-content">
          <div className="pricing-value">${job.budget}</div>
          <div className="pricing-label">{job.priceType}</div>
        </div>
      </div>

      <div className="pricing-item">
        <FaAward className="pricing-icon" />
        <div className="pricing-content">
          <div className="pricing-value">{job.experienceLevel}</div>
          <div className="pricing-label">{job.experienceDescription}</div>
        </div>
      </div>

      {job.projectType && (
        <div className="project-type-section">
          <span className="project-type-label">Project Type:</span>
          <span className="project-type-value"> {job.projectType}</span>
        </div>
      )}
    </div>
  )
}

export default JobPricing
