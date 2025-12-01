import React from 'react'
import { FaStar, FaBriefcase } from 'react-icons/fa'
import './FreelancerCard.css'

function FreelancerCard({ freelancer }) {
  const {
    name,
    location,
    hourlyRate,
    rating,
    jobsCount,
    description,
    skills,
    profileImage
  } = freelancer

  return (
    <div className="freelancer-card">
      <div className="freelancer-card-header">
        <img 
          src={profileImage} 
          alt={name} 
          className="freelancer-avatar"
        />
        <div className="freelancer-info">
          <h3 className="freelancer-name">{name}</h3>
          <p className="freelancer-location">{location}</p>
        </div>
      </div>

      <div className="freelancer-stats">
        <span className="freelancer-rate">${hourlyRate}/hr</span>
        <div className="freelancer-rating">
          <FaStar className="rating-star" />
          <span className="rating-value">{rating}</span>
        </div>
        <div className="freelancer-jobs">
          <FaBriefcase className="jobs-icon" />
          <span className="jobs-count">{jobsCount} jobs</span>
        </div>
      </div>

      <p className="freelancer-description">{description}</p>

      <div className="freelancer-skills">
        {skills.map((skill, index) => (
          <span key={index} className="skill-tag">
            {skill}
          </span>
        ))}
      </div>

      <button className="see-profile-btn">See profile</button>
    </div>
  )
}

export default FreelancerCard
