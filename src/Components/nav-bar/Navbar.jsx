import React from 'react'
import { Link } from 'react-router-dom'
import { 
  FaCode, 
  FaSuitcase, 
  FaCogs
} from 'react-icons/fa'
import CategoriesNav from './CategoriesNav'
import './navbar.css'

function CustomNavbar() {

  return (
    <header className="custom-header">
      {/* Main Navigation */}
      <nav className="navbar navbar-expand-lg main-navbar">
        {/* Logo */}
        <Link to="/" className="navbar-brand logo-brand">
            <div className="logo-container">
              <div className="logo-icon">
                <span className="logo-symbol">H</span>
              </div>
              <div className="logo-text">
                <span className="logo-main">Herfa</span>
                <span className="logo-arabic">حرفة</span>
              </div>
            </div>
          </Link>
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav" 
            aria-controls="navbarNav" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse" id="navbarNav">
            {/* Main Navigation Links */}
            <ul className="navbar-nav main-nav-links">
              <li className="nav-item">
                <Link to="/jobs" className="nav-link nav-link-custom">
                  <FaSuitcase className="nav-icon" />
                  Jobs
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/freelancers" className="nav-link nav-link-custom">
                  <FaCode className="nav-icon" />
                  Freelancers
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link nav-link-custom">
                  <FaCogs className="nav-icon" />
                  Contact Us
                </Link>
              </li>
            </ul>

            {/* Right Side Navigation */}
            <ul className="navbar-nav ms-auto right-nav">
              <li className="nav-item">
                <Link to="/register" className="nav-link auth-link">Register</Link>
              </li>
              <li className="nav-item">
                <Link to="/login" className="nav-link auth-link">Login</Link>
              </li>
              <li className="nav-item">
                <a href="/ar" className="nav-link language-link">العربية</a>
              </li>
              <li className="nav-item">
                <Link to="/post-job" className="btn btn-primary post-job-btn">
                  Post Job
                </Link>
              </li>
            </ul>
          </div>
      </nav>

      {/* Categories Navigation */}
      <CategoriesNav />
    </header>
  )
}

export default CustomNavbar