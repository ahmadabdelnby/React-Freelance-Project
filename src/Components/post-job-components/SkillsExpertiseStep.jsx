import React from 'react'
import './SkillsExpertiseStep.css'

function SkillsExpertiseStep({ formData, handleChange, handleSkillAdd, handleSkillRemove, experienceLevels }) {
  return (
    <div className="form-step">
      <h2 className="step-heading">What skills are required?</h2>
      
      <div className="form-group">
        <label className="form-label">Required Skills *</label>
        <div className="skills-input-wrapper">
          <input
            type="text"
            className="form-input"
            placeholder="Type a skill and press Enter"
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault()
                handleSkillAdd(e.target.value.trim())
                e.target.value = ''
              }
            }}
          />
        </div>
        <div className="skills-tags">
          {formData.skills.map((skill, index) => (
            <span key={index} className="skill-tag">
              {skill}
              <button
                type="button"
                className="skill-remove"
                onClick={() => handleSkillRemove(skill)}
              >
                ×
              </button>
            </span>
          ))}
        </div>
        <small className="form-hint">Add at least 3 skills required for this job</small>
      </div>

      <div className="form-group">
        <label className="form-label">Experience Level *</label>
        <div className="experience-options">
          {experienceLevels.map((level) => (
            <label key={level.value} className="radio-card">
              <input
                type="radio"
                name="experienceLevel"
                value={level.value}
                checked={formData.experienceLevel === level.value}
                onChange={handleChange}
                required
              />
              <div className="radio-card-content">
                <div className="radio-card-title">{level.label}</div>
                <div className="radio-card-description">{level.description}</div>
              </div>
            </label>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SkillsExpertiseStep
