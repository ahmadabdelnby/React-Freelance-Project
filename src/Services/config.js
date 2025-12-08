// src/config/api.js or src/constants/api.js
export const BASE_URL = "http://localhost:3000/Freelancing/api/v1";

// API endpoints
export const API_ENDPOINTS = {
  // Auth
  REGISTER: `${BASE_URL}/auth/register`,
  LOGIN: `${BASE_URL}/auth/login`,
  PROFILE: `${BASE_URL}/auth/profile`,
  USER_DASHBOARD: `${BASE_URL}/auth/userDashboard`,
  ADMIN_DASHBOARD: `${BASE_URL}/auth/adminDashboard`,
  
  // Categories
  CATEGORIES: `${BASE_URL}/categories`,
  
  // Specialties
  SPECIALTIES: `${BASE_URL}/specialties`,
  
  // Skills
  SKILLS: `${BASE_URL}/skills`,
  
  // Users
  USERS: `${BASE_URL}/users`,
  
  // Jobs
  JOBS: `${BASE_URL}/jobs`,
  
  // Proposals
  PROPOSALS: `${BASE_URL}/proposals`,
  
  // Contracts
  CONTRACTS: `${BASE_URL}/contracts`,
  
  // Reviews
  REVIEWS: `${BASE_URL}/reviews`,
  
  // Notifications
  NOTIFICATIONS: `${BASE_URL}/notifications`,
};