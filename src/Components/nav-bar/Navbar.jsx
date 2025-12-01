import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  FaCode,
  FaSuitcase,
  FaCogs,
  FaChevronDown,
  FaInfoCircle,
  FaQuestionCircle
} from 'react-icons/fa'
import './navbar.css'

function CustomNavbar() {
  const [openDropdown, setOpenDropdown] = useState(null)

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown)
  }

  return (
    <nav className="main-navbar">
      <div className="navbar-container">
        {/* Logo Section */}
        <div className="navbar-section navbar-left">
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
        </div>

        {/* Main Navigation Links - Center */}
        <div className="navbar-section navbar-center">
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

            {/* Discover Dropdown */}
            <li
              className="nav-item dropdown-item-custom"
              onMouseEnter={() => toggleDropdown('discover')}
              onMouseLeave={() => toggleDropdown(null)}
            >
              <button className="nav-link nav-link-custom dropdown-toggle-custom">
                <FaInfoCircle className="nav-icon" />
                Discover
                <FaChevronDown className="dropdown-arrow-icon" />
              </button>
              {openDropdown === 'discover' && (
                <div className="dropdown-menu-custom">
                  <Link to="/categories" className="dropdown-item-link">Categories</Link>
                  <Link to="/about" className="dropdown-item-link">About Us</Link>
                  <Link to="/how-it-works" className="dropdown-item-link">How It Works</Link>
                </div>
              )}
            </li>

            {/* Support Dropdown */}
            <li
              className="nav-item dropdown-item-custom"
              onMouseEnter={() => toggleDropdown('support')}
              onMouseLeave={() => toggleDropdown(null)}
            >
              <button className="nav-link nav-link-custom dropdown-toggle-custom">
                <FaQuestionCircle className="nav-icon" />
                Support
                <FaChevronDown className="dropdown-arrow-icon" />
              </button>
              {openDropdown === 'support' && (
                <div className="dropdown-menu-custom">
                  <Link to="/contact" className="dropdown-item-link">Contact Us</Link>
                  <Link to="/lifted" className="dropdown-item-link">Help Center</Link>
                </div>
              )}
            </li>
          </ul>
        </div>

        {/* Right Side Navigation */}
        <div className="navbar-section navbar-right">
          <ul className="navbar-nav right-nav">
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
      </div>
    </nav>
  )
}

export default CustomNavbar