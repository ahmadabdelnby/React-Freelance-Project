import React from 'react'
import { FaBriefcase, FaUsers } from 'react-icons/fa'

function HeroSection() {
  return (
        <section className="hero-section bg-light py-5">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <h1 className="display-4 fw-bold text-primary mb-4">
                  Find the Perfect Freelancer for Your Project
                </h1>
                <p className="lead mb-4">
                  Connect with skilled professionals from around the world. Get your projects done faster and better.
                </p>
                <div className="d-flex gap-3">
                  <button className="btn btn-primary btn-lg">
                    <FaBriefcase className="me-2" />
                    Post a Job
                  </button>
                  <button className="btn btn-outline-primary btn-lg">
                    <FaUsers className="me-2" />
                    Find Freelancers
                  </button>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="hero-image text-center">
                  <div style={{ 
                    width: '400px', 
                    height: '300px', 
                    backgroundColor: '#6c5ce7', 
                    borderRadius: '20px',
                    margin: '0 auto',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '18px'
                  }}>
                    Hero
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  )
}

export default HeroSection