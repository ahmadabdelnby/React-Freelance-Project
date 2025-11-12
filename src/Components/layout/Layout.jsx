import React from 'react'
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom'
import CustomNavbar from '../nav-bar/Navbar'
import Footer from '../footer/Footer'
import Login from '../login/Login'

// Pages
import Home from '../../Pages/Home'
import Jobs from '../../Pages/Jobs'
import Freelancers from '../../Pages/Freelancers'
import HowItWorks from '../../Pages/HowItWorks'
import Register from '../../Pages/Register'
import About from '../../Pages/About/MainAbout'
import PostJob from '../../Pages/PostJob'
import ContactUs from '../../Pages/Contact/ContactUs'

import './layout.css'
import LiftedPage from '../../Pages/Contact/LiftedPage'

// Component for pages with header and footer
function LayoutWithHeaderFooter() {
  return (
    <div className="layout-container">
      <CustomNavbar />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

function Layout() {
  return (
    <Router>
      <Routes>
        {/* Routes with Layout (Header + Footer) */}
        <Route path="/" element={<LayoutWithHeaderFooter />}>
          <Route index element={<Home />} />
          <Route path="jobs" element={<Jobs />} />
          <Route path="freelancers" element={<Freelancers />} />
          <Route path="how-it-works" element={<HowItWorks />} />
          <Route path="about" element={<About />} />
          <Route path="post-job" element={<PostJob />} />
          <Route path="register" element={<Register />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="/lifted" element={<LiftedPage />} />

          {/* 404 Route with Layout */}
          <Route path="*" element={
            <div className="container py-5 text-center">
              <h1>404 - Page Not Found</h1>
              <p>The page you're looking for doesn't exist.</p>
            </div>
          } />
        </Route>
        
        {/* Routes without Layout (Full page components) */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  )
}

export default Layout