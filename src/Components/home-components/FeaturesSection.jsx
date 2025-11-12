import React from 'react'
import { FaSearch, FaUsers, FaChartLine } from 'react-icons/fa'

function FeaturesSection() {
  return (
    <section className="features-section py-5">
          <div className="container">
            <div className="row text-center mb-5">
              <div className="col">
                <h2 className="fw-bold mb-3">Why Choose Herfa?</h2>
                <p className="lead">The best platform to find talented freelancers</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 mb-4">
                <div className="card h-100 text-center border-0 shadow-sm">
                  <div className="card-body p-4">
                    <FaUsers className="text-primary mb-3" size={48} />
                    <h5 className="card-title">Skilled Professionals</h5>
                    <p className="card-text">
                      Access thousands of verified freelancers with proven track records.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="card h-100 text-center border-0 shadow-sm">
                  <div className="card-body p-4">
                    <FaSearch className="text-primary mb-3" size={48} />
                    <h5 className="card-title">Easy to Find</h5>
                    <p className="card-text">
                      Advanced search and filtering to find the perfect match for your project.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="card h-100 text-center border-0 shadow-sm">
                  <div className="card-body p-4">
                    <FaChartLine className="text-primary mb-3" size={48} />
                    <h5 className="card-title">Quality Results</h5>
                    <p className="card-text">
                      Get high-quality work delivered on time with our rating system.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  )
}

export default FeaturesSection