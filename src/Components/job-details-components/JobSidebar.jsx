import React, { useState } from 'react'
import { FaHeart, FaRegHeart, FaFlag, FaStar, FaCircle, FaQuestionCircle } from 'react-icons/fa'
import './JobSidebar.css'

function JobSidebar({ client }) {
  const [isSaved, setIsSaved] = useState(false)
  const [jobLink] = useState('https://www.herfa.com/jobs/...')

  const handleSave = () => {
    setIsSaved(!isSaved)
  }

  const handleCopyLink = () => {
    navigator.clipboard.writeText(jobLink)
    alert('Link copied to clipboard!')
  }

  return (
    <div className="job-sidebar">
      {/* Action Buttons */}
      <button className="apply-now-btn">Apply now</button>
      
      <button className={`save-job-btn ${isSaved ? 'saved' : ''}`} onClick={handleSave}>
        {isSaved ? <FaHeart className="heart-icon filled" /> : <FaRegHeart className="heart-icon" />}
        <span>Save job</span>
      </button>

      <button className="flag-btn">
        <FaFlag className="flag-icon" />
        <span>Flag as inappropriate</span>
      </button>

      {/* Client Info */}
      <div className="client-info">
        <div className="required-connects">
          <span className="connects-label">Required Connects to submit a proposal:</span>
          <span className="connects-value"> {client.requiredConnects}</span>
          <FaQuestionCircle className="info-icon" />
        </div>
        
        <div className="available-connects">
          <span>Available Connects: {client.availableConnects}</span>
        </div>

        <h3 className="client-heading">About the client</h3>

        <div className="payment-verified">
          <FaCircle className="verified-dot" />
          <span>Payment method verified</span>
        </div>

        <div className="client-rating">
          <div className="rating-stars">
            {[...Array(5)].map((_, index) => (
              <FaStar key={index} className={index < Math.floor(client.rating) ? 'star filled' : 'star'} />
            ))}
          </div>
          <span className="rating-value">{client.rating}</span>
        </div>

        <div className="client-reviews">
          {client.reviewsCount} of {client.totalReviews} reviews
        </div>

        <div className="client-location">
          <strong>{client.country}</strong>
        </div>

        <div className="client-time">
          {client.location} {client.localTime}
        </div>

        <div className="client-stats">
          <div className="stat-item">
            <div className="stat-value">{client.jobsPosted} jobs posted</div>
            <div className="stat-detail">{client.hireRate}% hire rate, {client.openJobs} open jobs</div>
          </div>

          <div className="stat-item">
            <div className="stat-value">${client.totalSpent} total spent</div>
            <div className="stat-detail">{client.hires} hires, {client.activeJobs} active</div>
          </div>

          <div className="stat-item">
            <div className="stat-value">${client.avgHourlyRate} /hr avg hourly rate paid</div>
            <div className="stat-detail">{client.hoursPaid} hours</div>
          </div>

          <div className="stat-item">
            <div className="stat-value">Member since {client.memberSince}</div>
          </div>
        </div>
      </div>

      {/* Job Link */}
      <div className="job-link-section">
        <h4 className="job-link-heading">Job link</h4>
        <div className="job-link-input-wrapper">
          <input 
            type="text" 
            value={jobLink} 
            readOnly 
            className="job-link-input"
          />
        </div>
        <button className="copy-link-btn" onClick={handleCopyLink}>
          Copy link
        </button>
      </div>
    </div>
  )
}

export default JobSidebar
