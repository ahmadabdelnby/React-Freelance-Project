import React from 'react'

function CTASection() {
  return (
    <section className="cta-section bg-primary text-white py-5">
      <div className="container">
        <div className="row text-center">
          <div className="col">
            <h2 className="fw-bold mb-3">Ready to Get Started?</h2>
            <p className="lead mb-4">Join thousands of satisfied clients and freelancers</p>
            <div className="d-flex justify-content-center gap-3">
              <button className="btn btn-light btn-lg">
                Post Your First Job
              </button>
              <button className="btn btn-outline-light btn-lg">
                Browse Freelancers
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection