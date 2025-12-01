import React from 'react'
import { FaChevronDown } from 'react-icons/fa'
import './BudgetTimelineStep.css'

function BudgetTimelineStep({ formData, handleChange }) {
  return (
    <div className="form-step">
      <h2 className="step-heading">Set your budget and timeline</h2>
      
      <div className="form-group">
        <label className="form-label">How do you want to pay? *</label>
        <div className="budget-type-options">
          <label className="radio-card">
            <input
              type="radio"
              name="budgetType"
              value="fixed"
              checked={formData.budgetType === 'fixed'}
              onChange={handleChange}
            />
            <div className="radio-card-content">
              <div className="radio-card-title">Fixed Price</div>
              <div className="radio-card-description">Pay a fixed amount for the entire project</div>
            </div>
          </label>

          <label className="radio-card">
            <input
              type="radio"
              name="budgetType"
              value="hourly"
              checked={formData.budgetType === 'hourly'}
              onChange={handleChange}
            />
            <div className="radio-card-content">
              <div className="radio-card-title">Hourly Rate</div>
              <div className="radio-card-description">Pay based on hourly rate</div>
            </div>
          </label>
        </div>
      </div>

      {formData.budgetType === 'fixed' ? (
        <div className="form-group">
          <label htmlFor="budget" className="form-label">Budget (USD) *</label>
          <input
            type="number"
            id="budget"
            name="budget"
            className="form-input"
            placeholder="e.g. 500"
            value={formData.budget}
            onChange={handleChange}
            required
          />
        </div>
      ) : (
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="hourlyRateMin" className="form-label">Min Hourly Rate (USD) *</label>
            <input
              type="number"
              id="hourlyRateMin"
              name="hourlyRateMin"
              className="form-input"
              placeholder="e.g. 15"
              value={formData.hourlyRateMin}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="hourlyRateMax" className="form-label">Max Hourly Rate (USD) *</label>
            <input
              type="number"
              id="hourlyRateMax"
              name="hourlyRateMax"
              className="form-input"
              placeholder="e.g. 30"
              value={formData.hourlyRateMax}
              onChange={handleChange}
              required
            />
          </div>
        </div>
      )}

      <div className="form-group">
        <label htmlFor="projectDuration" className="form-label">Project Duration *</label>
        <div className="select-wrapper">
          <select
            id="projectDuration"
            name="projectDuration"
            className="form-select"
            value={formData.projectDuration}
            onChange={handleChange}
            required
          >
            <option value="">Select duration</option>
            <option value="less-1-month">Less than 1 month</option>
            <option value="1-3-months">1-3 months</option>
            <option value="3-6-months">3-6 months</option>
            <option value="more-6-months">More than 6 months</option>
          </select>
          <FaChevronDown className="select-arrow" />
        </div>
      </div>
    </div>
  )
}

export default BudgetTimelineStep
