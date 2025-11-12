import React from 'react'
import { useForm } from 'react-hook-form'
import { FaGoogle, FaFacebook } from 'react-icons/fa'

function Register() {
  const { register, handleSubmit, formState: { errors }, watch } = useForm()
  const password = watch('password')

  const onSubmit = (data) => {
    console.log('Register Data:', data)
  }

  return (
    <div className="page-content">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-xl-6">
            <div className="card shadow-lg">
              <div className="card-body p-5">
                <div className="text-center mb-4">
                  <h2 className="fw-bold text-primary mb-3">Create Your Account</h2>
                  <p className="text-muted">Join thousands of freelancers and clients</p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">First Name *</label>
                        <input
                          type="text"
                          className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                          placeholder="Enter your first name"
                          {...register('firstName', { required: 'First name is required' })}
                        />
                        {errors.firstName && (
                          <div className="invalid-feedback">{errors.firstName.message}</div>
                        )}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">Last Name *</label>
                        <input
                          type="text"
                          className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                          placeholder="Enter your last name"
                          {...register('lastName', { required: 'Last name is required' })}
                        />
                        {errors.lastName && (
                          <div className="invalid-feedback">{errors.lastName.message}</div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Email Address *</label>
                    <input
                      type="email"
                      className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                      placeholder="Enter your email"
                      {...register('email', {
                        required: 'Email is required',
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: 'Invalid email address'
                        }
                      })}
                    />
                    {errors.email && (
                      <div className="invalid-feedback">{errors.email.message}</div>
                    )}
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Password *</label>
                    <input
                      type="password"
                      className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                      placeholder="Create a strong password"
                      {...register('password', {
                        required: 'Password is required',
                        minLength: {
                          value: 8,
                          message: 'Password must be at least 8 characters'
                        }
                      })}
                    />
                    {errors.password && (
                      <div className="invalid-feedback">{errors.password.message}</div>
                    )}
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Confirm Password *</label>
                    <input
                      type="password"
                      className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
                      placeholder="Confirm your password"
                      {...register('confirmPassword', {
                        required: 'Please confirm your password',
                        validate: value => value === password || 'Passwords do not match'
                      })}
                    />
                    {errors.confirmPassword && (
                      <div className="invalid-feedback">{errors.confirmPassword.message}</div>
                    )}
                  </div>

                  <div className="mb-3">
                    <label className="form-label">I want to *</label>
                    <div>
                      <div className="form-check">
                        <input
                          type="radio"
                          className="form-check-input"
                          id="hire"
                          value="client"
                          {...register('userType', { required: 'Please select an option' })}
                        />
                        <label className="form-check-label" htmlFor="hire">
                          Hire freelancers for my projects
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          type="radio"
                          className="form-check-input"
                          id="work"
                          value="freelancer"
                          {...register('userType', { required: 'Please select an option' })}
                        />
                        <label className="form-check-label" htmlFor="work">
                          Work as a freelancer
                        </label>
                      </div>
                    </div>
                    {errors.userType && (
                      <div className="text-danger small">{errors.userType.message}</div>
                    )}
                  </div>

                  <div className="mb-4">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className={`form-check-input ${errors.terms ? 'is-invalid' : ''}`}
                        id="terms"
                        {...register('terms', { required: 'You must agree to the terms' })}
                      />
                      <label className="form-check-label" htmlFor="terms">
                        I agree to the Terms of Service and Privacy Policy
                      </label>
                    </div>
                    {errors.terms && (
                      <div className="text-danger small">{errors.terms.message}</div>
                    )}
                  </div>

                  <button type="submit" className="btn btn-primary btn-lg w-100 mb-3">
                    Create Account
                  </button>

                  <div className="text-center mb-4">
                    <span className="text-muted">
                      Already have an account? <a href="/login" className="text-primary">Sign In</a>
                    </span>
                  </div>

                  <hr className="mb-4" />

                  <div className="text-center mb-3">
                    <p className="text-muted">Or sign up with</p>
                  </div>

                  <div className="row">
                    <div className="col">
                      <button type="button" className="btn btn-outline-danger w-100 mb-2">
                        <FaGoogle className="me-2" />
                        Google
                      </button>
                    </div>
                    <div className="col">
                      <button type="button" className="btn btn-outline-primary w-100 mb-2">
                        <FaFacebook className="me-2" />
                        Facebook
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register