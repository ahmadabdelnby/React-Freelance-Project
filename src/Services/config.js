// API Configuration
export const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api'

// API Endpoints
export const API_ENDPOINTS = {
  // Authentication
  LOGIN: '/auth/login',
  REGISTER: '/auth/register',
  LOGOUT: '/auth/logout',
  
  // Jobs
  JOBS: '/jobs',
  JOB_DETAILS: '/jobs/:id',
  POST_JOB: '/jobs',
  
  // Freelancers
  FREELANCERS: '/freelancers',
  FREELANCER_PROFILE: '/freelancers/:id',
  
  // Categories
  CATEGORIES: '/categories',
  
  // User Profile
  USER_PROFILE: '/user/profile',
  UPDATE_PROFILE: '/user/profile',
  
  // Applications
  APPLICATIONS: '/applications',
  APPLY_JOB: '/applications',
}

// Helper function to build full URL
export const buildUrl = (endpoint, params = {}) => {
  let url = API_BASE_URL + endpoint
  
  // Replace path parameters (e.g., :id)
  Object.keys(params).forEach(key => {
    url = url.replace(`:${key}`, params[key])
  })
  
  return url
}
