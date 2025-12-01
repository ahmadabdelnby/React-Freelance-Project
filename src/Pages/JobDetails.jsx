import React from 'react'
import JobHeader from '../Components/job-details-components/JobHeader'
import JobSummary from '../Components/job-details-components/JobSummary'
import JobPricing from '../Components/job-details-components/JobPricing'
import JobSkills from '../Components/job-details-components/JobSkills'
import JobSidebar from '../Components/job-details-components/JobSidebar'
import SuggestedJobs from '../Components/job-details-components/SuggestedJobs'
import './JobDetails.css'

function JobDetails() {
  // Sample job data - replace with actual data from API or props
  const jobData = {
    title: 'HTML and CSS Developer Needed for Website development of responsive Homepage',
    postedTime: '2 hours ago',
    location: 'Worldwide',
    summary: 'We are looking for a skilled developer proficient in HTML and CSS to help us design and implement a modern, responsive website. Currently it is just one page, which we already have Figma designs for.',
    deliverables: [
      'Responsive versions (mobile, tablet, desktop)',
      'Pixel-perfect implementation following the Figma file',
      'A Well-organized, documented code',
      'A clear file structure'
    ],
    description: 'The ideal candidate should have a strong understanding of web standards and best practices. You will be responsible for creating visually appealing layouts, ensuring cross-browser compatibility, and optimizing the website for performance. If you are detail-oriented and passionate about web design, we would love to hear from you!',
    budget: '50.00',
    priceType: 'Fixed-price',
    experienceLevel: 'Intermediate',
    experienceDescription: 'I am looking for a mix of experience and value',
    projectType: 'Ongoing project',
    skills: ['CSS', 'HTML', 'HTML5', 'Web Design', 'CSS 3']
  }

  const clientData = {
    requiredConnects: '11',
    availableConnects: '5',
    rating: 4.9,
    reviewsCount: 4.90,
    totalReviews: 61,
    country: 'Germany',
    location: 'Heidelberg',
    localTime: '10:59 AM',
    jobsPosted: 65,
    hireRate: 100,
    openJobs: 2,
    totalSpent: '6.5K',
    hires: 73,
    activeJobs: 2,
    avgHourlyRate: '12.96',
    hoursPaid: 185,
    memberSince: 'May 5, 2016'
  }

  return (
    <div className="job-details-page">
      <div className="container">
        <div className="job-details-layout">
          {/* Main Content */}
          <div className="job-main-content">
            <JobHeader job={jobData} />
            <JobSummary job={jobData} />
            <JobPricing job={jobData} />
            <JobSkills skills={jobData.skills} />
          </div>

          {/* Sidebar */}
          <aside className="job-sidebar-wrapper">
            <JobSidebar client={clientData} />
          </aside>
        </div>
      </div>

      {/* Suggested Jobs Section */}
      <SuggestedJobs />
    </div>
  )
}

export default JobDetails
