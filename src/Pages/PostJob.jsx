import React, { useState } from 'react'
import ProgressSteps from '../Components/post-job-components/ProgressSteps'
import JobDetailsStep from '../Components/post-job-components/JobDetailsStep'
import SkillsExpertiseStep from '../Components/post-job-components/SkillsExpertiseStep'
import BudgetTimelineStep from '../Components/post-job-components/BudgetTimelineStep'
import ReviewStep from '../Components/post-job-components/ReviewStep'
import FormNavigation from '../Components/post-job-components/FormNavigation'
import './PostJob.css'

function PostJob() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    // Step 1: Job Details
    jobTitle: '',
    jobDescription: '',
    category: '',
    
    // Step 2: Skills and Expertise
    skills: [],
    experienceLevel: '',
    
    // Step 3: Budget and Timeline
    budgetType: 'fixed',
    budget: '',
    hourlyRateMin: '',
    hourlyRateMax: '',
    projectDuration: '',
    
    // Step 4: Additional Information
    attachments: [],
    location: 'worldwide'
  })

  const categories = [
    'Web Development',
    'Mobile Development',
    'Design & Creative',
    'Writing & Translation',
    'Digital Marketing',
    'Video & Animation',
    'Data Science & Analytics',
    'Engineering & Architecture'
  ]

  const experienceLevels = [
    { value: 'entry', label: 'Entry Level', description: 'Looking for someone relatively new to this field' },
    { value: 'intermediate', label: 'Intermediate', description: 'Looking for substantial experience in this field' },
    { value: 'expert', label: 'Expert', description: 'Looking for comprehensive expertise in this field' }
  ]

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSkillAdd = (skill) => {
    if (skill && !formData.skills.includes(skill)) {
      setFormData(prev => ({
        ...prev,
        skills: [...prev.skills, skill]
      }))
    }
  }

  const handleSkillRemove = (skillToRemove) => {
    setFormData(prev => ({
      ...prev,
      skills: prev.skills.filter(skill => skill !== skillToRemove)
    }))
  }

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Job posted:', formData)
    // Handle form submission
  }

  const steps = [
    { number: 1, title: 'Job Details' },
    { number: 2, title: 'Skills & Expertise' },
    { number: 3, title: 'Budget & Timeline' },
    { number: 4, title: 'Review & Post' }
  ]

  return (
    <div className="post-job-page">
      <div className="post-job-header">
        <div className="container">
          <h1 className="post-job-title">Post a Job</h1>
          <p className="post-job-subtitle">Find the perfect freelancer for your project</p>
        </div>
      </div>

      <div className="container">
        <div className="post-job-container">
          <ProgressSteps currentStep={currentStep} steps={steps} />

          <form onSubmit={handleSubmit} className="post-job-form">
            {currentStep === 1 && (
              <JobDetailsStep
                formData={formData}
                handleChange={handleChange}
                categories={categories}
              />
            )}

            {currentStep === 2 && (
              <SkillsExpertiseStep
                formData={formData}
                handleChange={handleChange}
                handleSkillAdd={handleSkillAdd}
                handleSkillRemove={handleSkillRemove}
                experienceLevels={experienceLevels}
              />
            )}

            {currentStep === 3 && (
              <BudgetTimelineStep
                formData={formData}
                handleChange={handleChange}
              />
            )}

            {currentStep === 4 && (
              <ReviewStep formData={formData} />
            )}

            <FormNavigation
              currentStep={currentStep}
              totalSteps={4}
              onPrev={prevStep}
              onNext={nextStep}
              onSubmit={handleSubmit}
            />
          </form>
        </div>
      </div>
    </div>
  )
}

export default PostJob