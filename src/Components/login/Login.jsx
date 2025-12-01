import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaUser, FaGoogle, FaApple } from 'react-icons/fa'
import './login.css'

function Login() {
  const [username, setUsername] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle login logic here
    console.log('Login attempt with:', username)
  }

  const handleGoogleLogin = () => {
    // Handle Google login
    console.log('Google login')
  }

  const handleAppleLogin = () => {
    // Handle Apple login
    console.log('Apple login')
  }

  return (
    <div className="login-page">
      {/* Header */}
      <header className="login-header">
        <Link to="/" className="login-logo">
          <div className="logo-container">
            <div className="logo-icon">
              <span className="logo-symbol">H</span>
            </div>
            <div className="logo-text">
              <span className="logo-main">Herfa</span>
            </div>
          </div>
        </Link>
      </header>

      {/* Main Content */}
      <main className="login-main">
        <div className="login-container">
          <div className="login-card">
            <h1 className="login-title">Log in to Herfa</h1>

            <form onSubmit={handleSubmit} className="login-form">
              {/* Username/Email Input */}
              <div className="form-group">
                <div className="input-wrapper">
                  <FaUser className="input-icon" />
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Username or Email"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* Continue Button */}
              <button type="submit" className="btn-continue">
                Continue
              </button>

              {/* Divider */}
              <div className="login-divider">
                <span>or</span>
              </div>

              {/* Social Login Buttons */}
              <button
                type="button"
                className="btn-social btn-google"
                onClick={handleGoogleLogin}
              >
                <FaGoogle className="social-icon" />
                Continue with Google
              </button>

              <button
                type="button"
                className="btn-social btn-apple"
                onClick={handleAppleLogin}
              >
                <FaApple className="social-icon" />
                Continue with Apple
              </button>
            </form>

            {/* Sign Up Link */}
            <div className="login-footer">
              <p className="signup-text">Don't have an Herfa account?</p>
              <Link to="/register" className="btn-signup">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="login-page-footer">
        <p className="footer-text">
          © 2018 - 2025 Herfa® Global Inc. • Privacy Policy • Your Privacy Choices
        </p>
      </footer>
    </div>
  )
}

export default Login