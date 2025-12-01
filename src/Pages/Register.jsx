import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaApple, FaGoogle, FaEye, FaEyeSlash, FaChevronDown } from 'react-icons/fa'
import './Register.css'

function Register() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    country: 'Egypt',
    sendEmails: true,
    agreeTerms: false
  })
  const [showPassword, setShowPassword] = useState(false)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Registration data:', formData)
  }

  const handleAppleSignup = () => {
    console.log('Apple signup')
  }

  const handleGoogleSignup = () => {
    console.log('Google signup')
  }

  return (
    <div className="register-page">
      {/* Header */}
      <header className="register-header">
        <div className="register-header-container">
          <Link to="/" className="register-logo">
            <div className="logo-container">
              <div className="logo-icon">
                <span className="logo-symbol">H</span>
              </div>
              <div className="logo-text">
                <span className="logo-main">Herfa</span>
              </div>
            </div>
          </Link>
          <div className="header-actions">
            <span className="header-text">Here to hire talent?</span>
            <Link to="/post-job" className="btn-join-client">Join as a Client</Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="register-main">
        <div className="register-container">
          <h1 className="register-title">Sign up to find work you love</h1>

          {/* Social Signup Buttons */}
          <div className="social-signup-buttons">
            <button
              type="button"
              className="btn-social-signup btn-apple-signup"
              onClick={handleAppleSignup}
            >
              <FaApple className="social-signup-icon" />
              Continue with Apple
            </button>

            <button
              type="button"
              className="btn-social-signup btn-google-signup"
              onClick={handleGoogleSignup}
            >
              <FaGoogle className="social-signup-icon" />
              Continue with Google
            </button>
          </div>

          {/* Divider */}
          <div className="register-divider">
            <span>or</span>
          </div>

          {/* Registration Form */}
          <form onSubmit={handleSubmit} className="register-form">
            {/* Name Fields */}
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName" className="form-label">First name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="form-input"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="lastName" className="form-label">Last name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="form-input"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-input"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* Password */}
            <div className="form-group">
              <label htmlFor="password" className="form-label">Password</label>
              <div className="password-input-wrapper">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  className="form-input"
                  placeholder="Password (8 or more characters)"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            {/* Country */}
            <div className="form-group">
              <label htmlFor="country" className="form-label">Country</label>
              <div className="select-wrapper">
                <select
                  id="country"
                  name="country"
                  className="form-select"
                  value={formData.country}
                  onChange={handleChange}
                >
                  <option value="Egypt">Egypt</option>
                  <option value="United States">United States</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="Canada">Canada</option>
                  <option value="Australia">Australia</option>
                  <option value="Germany">Germany</option>
                </select>
                <FaChevronDown className="select-arrow" />
              </div>
            </div>

            {/* Email Preferences Checkbox */}
            <div className="form-checkbox">
              <input
                type="checkbox"
                id="sendEmails"
                name="sendEmails"
                checked={formData.sendEmails}
                onChange={handleChange}
              />
              <label htmlFor="sendEmails" className="checkbox-label">
                Send me helpful emails to find rewarding work and job leads.
              </label>
            </div>

            {/* Terms Checkbox */}
            <div className="form-checkbox">
              <input
                type="checkbox"
                id="agreeTerms"
                name="agreeTerms"
                checked={formData.agreeTerms}
                onChange={handleChange}
                required
              />
              <label htmlFor="agreeTerms" className="checkbox-label">
                Yes, I understand and agree to the <Link to="/terms" className="link-green">Herfa Terms of Service</Link>, including the <Link to="/user-agreement" className="link-green">User Agreement</Link> and <Link to="/privacy" className="link-green">Privacy Policy</Link>.
              </label>
            </div>

            {/* Submit Button */}
            <button type="submit" className="btn-create-account">
              Create my account
            </button>
          </form>

          {/* Login Link */}
          <div className="register-footer">
            <p className="login-text">
              Already have an account? <Link to="/login" className="link-green">Log In</Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Register