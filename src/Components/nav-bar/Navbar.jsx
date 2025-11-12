import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  FaCode, 
  FaPalette, 
  FaVideo, 
  FaLanguage, 
  FaPen, 
  FaBullhorn, 
  FaChartLine, 
  FaSuitcase, 
  FaGraduationCap, 
  FaDollarSign, 
  FaCogs, 
  FaChevronDown,
  FaChevronLeft,
  FaChevronRight
} from 'react-icons/fa'
import './navbar.css'

function CustomNavbar() {
  const [showCategories, setShowCategories] = useState(false)

  const scrollLeft = () => {
    const container = document.querySelector('.categories-scroll')
    if (container) {
      container.scrollBy({ left: -200, behavior: 'smooth' })
    }
  }

  const scrollRight = () => {
    const container = document.querySelector('.categories-scroll')
    if (container) {
      container.scrollBy({ left: 200, behavior: 'smooth' })
    }
  }

  return (
    <header className="custom-header">
      {/* Main Navigation */}
      <nav className="navbar navbar-expand-lg main-navbar">
        <div className="container">
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
                <Link to="/how-it-works" className="nav-link nav-link-custom">
                  <FaCogs className="nav-icon" />
                  How it works
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
        </div>
      </nav>

      {/* Categories Navigation */}
      <div className="categories-navbar">
        <div className="container">
          <div className="categories-container d-flex align-items-center">
            {/* Left Arrow */}
            <button 
              className="category-arrow category-arrow-left"
              onClick={scrollLeft}
              aria-label="Scroll categories left"
            >
              <FaChevronLeft />
            </button>
            
            {/* Categories Scroll Container */}
            <div className="categories-scroll">
              <div className="category-item">
                <FaCode className="category-icon" />
                <span>Developers</span>
              </div>
              <div className="category-item">
                <FaPalette className="category-icon" />
                <span>Designers</span>
              </div>
              <div className="category-item">
                <FaVideo className="category-icon" />
                <span>Media Production</span>
              </div>
              <div className="category-item">
                <FaLanguage className="category-icon" />
                <span>Translators</span>
              </div>
              <div className="category-item">
                <FaPen className="category-icon" />
                <span>Writing</span>
              </div>
              <div className="category-item">
                <FaBullhorn className="category-icon" />
                <span>Digital Marketing</span>
              </div>
              <div className="category-item">
                <FaChartLine className="category-icon" />
                <span>Marketing</span>
              </div>
              <div className="category-item">
                <FaSuitcase className="category-icon" />
                <span>Sales</span>
              </div>
              <div className="category-item">
                <FaGraduationCap className="category-icon" />
                <span>Training</span>
              </div>
              <div className="category-item">
                <FaDollarSign className="category-icon" />
                <span>Finance</span>
              </div>
              <div className="category-item dropdown-category">
                <FaCogs className="category-icon" />
                <span>Business</span>
                <FaChevronDown className="dropdown-arrow" />
              </div>
              <div className="category-item dropdown-category">
                <FaCogs className="category-icon" />
                <span>Engineering</span>
                <FaChevronDown className="dropdown-arrow" />
              </div>
            </div>
            
            {/* Right Arrow */}
            <button 
              className="category-arrow category-arrow-right"
              onClick={scrollRight}
              aria-label="Scroll categories right"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default CustomNavbar