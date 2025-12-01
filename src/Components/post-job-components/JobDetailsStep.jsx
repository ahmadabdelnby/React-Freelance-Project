import React from 'react'
import { FaChevronDown } from 'react-icons/fa'
import './JobDetailsStep.css'

function JobDetailsStep({ formData, handleChange, categories }) {
  return (
    <div className="form-step">
      <h2 className="step-heading">Tell us about your job</h2>
      
      <div className="form-group">
        <label htmlFor="jobTitle" className="form-label">Job Title *</label>
        <input
          type="text"
          id="jobTitle"
          name="jobTitle"
          className="form-input"
          placeholder="e.g. Build a responsive website"
          value={formData.jobTitle}
          onChange={handleChange}
          required
        />
        <small className="form-hint">Write a clear, descriptive title for your job</small>
      </div>

      <div className="form-group">
        <label htmlFor="category" className="form-label">Category *</label>
        <div className="select-wrapper">
          <select
            id="category"
            name="category"
            className="form-select"
            value={formData.category}
            onChange={handleChange}
            required
          >
            <option value="">Select a category</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
          <FaChevronDown className="select-arrow" />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="jobDescription" className="form-label">Job Description *</label>
        <textarea
          id="jobDescription"
          name="jobDescription"
          className="form-textarea"
          rows="8"
          placeholder="Describe your project in detail..."
          value={formData.jobDescription}
          onChange={handleChange}
          required
        />
        <small className="form-hint">Include project details, deliverables, and any specific requirements</small>
      </div>
    </div>
  )
}

export default JobDetailsStep
