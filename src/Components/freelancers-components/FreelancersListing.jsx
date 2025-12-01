import React from 'react'
import { Link } from 'react-router-dom'
import { FaHome, FaChevronRight } from 'react-icons/fa'
import FreelancerCard from '../../Shared/Cards/FreelancerCard'
import './FreelancersListing.css'

function FreelancersListing() {
  // Sample data - replace with actual data from API
  const freelancers = [
    {
      id: 1,
      name: 'Salman K.',
      location: 'Gilgit, Pakistan',
      hourlyRate: 15,
      rating: 4.6,
      jobsCount: 53,
      description: 'Creative Graphic Designer with 6+ years of experience turning ideas into visually engaging designs across digital and print media. Skilled in...',
      skills: ['Graphic Design', 'Banner Ad Design', 'Flyer'],
      profileImage: 'https://via.placeholder.com/60'
    },
    {
      id: 2,
      name: 'Sadaf M.',
      location: 'Karachi, Pakistan',
      hourlyRate: 17,
      rating: 4.9,
      jobsCount: 114,
      description: "I'm a professional graphic designer with over 5 years of experience helping brands, authors, and startups bring their ideas to life through clean...",
      skills: ['Graphic Design', 'Infographic', 'Logo Design'],
      profileImage: 'https://via.placeholder.com/60'
    },
    {
      id: 3,
      name: 'Ivan S.',
      location: 'Chervone, Ukraine',
      hourlyRate: 67,
      rating: 4.9,
      jobsCount: 541,
      description: 'DO YOU WANT AD CREATIVES THAT ACTUALLY DRIVE CONVERSIONS NOT JUST LOOK PRETTY? If you\'ve been struggling with finding a designer...',
      skills: ['Graphic Design', 'Adobe Photoshop', 'Banner'],
      profileImage: 'https://via.placeholder.com/60'
    },
    {
      id: 4,
      name: 'Mr T.',
      location: 'Goraya, India',
      hourlyRate: 12,
      rating: 4.6,
      jobsCount: 748,
      description: 'As a UI/UX Designer and Graphic Design Expert, I bring a unique blend of creativity and strategic thinking to every project. With over 8 years of...',
      skills: ['Graphic Design', 'Adobe Illustrator', 'Adobe'],
      profileImage: 'https://via.placeholder.com/60'
    },
    {
      id: 5,
      name: 'Hamza J.',
      location: 'Faisalabad, Pakistan',
      hourlyRate: 15,
      rating: 4.9,
      jobsCount: 95,
      description: 'Your brand deserves visuals that stop the scroll! I craft custom designs that make people look twice, engage your audience, and help you...',
      skills: ['Graphic Design', 'Adobe Illustrator', 'Adobe'],
      profileImage: 'https://via.placeholder.com/60'
    },
    {
      id: 6,
      name: 'Intezar H.',
      location: 'Punjab - Sialkot, Pakistan',
      hourlyRate: 20,
      rating: 4.9,
      jobsCount: 825,
      description: 'Hi my name is I  Hussain and I am a very skilled graphic designer with over 18 years of experience. I am highly skilled with ALL Adobe...',
      skills: ['Graphic Design', 'Adobe Illustrator', 'Adobe'],
      profileImage: 'https://via.placeholder.com/60'
    }
  ]

  return (
    <section className="freelancers-listing">
      <div className="container">
        {/* Breadcrumb */}
        <nav className="breadcrumb-nav">
          <Link to="/" className="breadcrumb-item">
            <FaHome className="breadcrumb-icon" />
          </Link>
          <FaChevronRight className="breadcrumb-separator" />
          <Link to="/design-creative" className="breadcrumb-item">
            Design & Creative Talent
          </Link>
          <FaChevronRight className="breadcrumb-separator" />
          <span className="breadcrumb-item active">Graphic Designers</span>
        </nav>

        {/* Freelancers Grid */}
        <div className="freelancers-grid">
          {freelancers.map((freelancer) => (
            <FreelancerCard key={freelancer.id} freelancer={freelancer} />
          ))}
        </div>

        {/* View More Button */}
        <div className="view-more-container">
          <button className="view-more-btn">View more freelancers</button>
        </div>
      </div>
    </section>
  )
}

export default FreelancersListing
