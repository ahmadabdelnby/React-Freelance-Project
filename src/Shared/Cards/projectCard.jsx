import React from 'react';
import { Link } from 'react-router-dom';
import './projectCard.css';

const ProjectCard = ({ project }) => {
    const {
        id,
        title,
        postedTime,
        jobType,
        experienceLevel,
        budget,
        description,
        skills = [],
        paymentVerified = false,
        clientRating = 0,
        clientSpent = 0,
        clientCountry,
        proposals,
        link = '#'
    } = project;

    return (
        <section className="project-card">
            <div className="project-card-grid">
                {/* Main Content */}
                <div className="project-card-main">
                    {/* Posted Time */}
                    <span className="project-posted-time">
                        Posted <span>{postedTime}</span>
                    </span>

                    {/* Title */}
                    <h3 className="project-title">
                        <Link to={`/jobs/${id}`} className="project-link">
                            {title}
                        </Link>
                    </h3>
                </div>

                {/* Actions */}
                <div className="project-actions">
                    <button
                        className="action-btn"
                        aria-label={`Save job ${title}`}
                        title="Save this job"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="icon">
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                                d="M19.674 6.176c-1.722-1.634-4.484-1.515-6.165.16L11.988 7.89l-1.642-1.634a4.314 4.314 0 00-6.085 0 4.269 4.269 0 000 6.058s5.485 5.221 7.246 6.537c.28.199.68.199.96 0 1.762-1.316 7.247-6.537 7.247-6.537 1.721-1.714 1.721-4.464-.04-6.138z"
                            ></path>
                        </svg>
                    </button>
                </div>
            </div>

            {/* Job Details */}
            <div className="project-details">
                <small className="project-meta">
                    <strong>{jobType}</strong>
                    {experienceLevel && <span> - {experienceLevel}</span>}
                    {budget && (
                        <span>
                            {' - '}
                            <span>Est. Budget: </span>
                            <span>${budget}</span>
                        </span>
                    )}
                </small>
            </div>

            {/* Description */}
            <div className="project-description">
                <p>{description}</p>
            </div>

            {/* Skills */}
            {skills.length > 0 && (
                <div className="project-skills">
                    <div className="skills-container">
                        {skills.map((skill, index) => (
                            <a
                                key={index}
                                href="#"
                                className="skill-tag"
                                onClick={(e) => e.preventDefault()}
                            >
                                {skill}
                            </a>
                        ))}
                    </div>
                </div>
            )}

            {/* Client Information */}
            <div className="project-client-info">
                <div className="client-info-row">
                    {/* Payment Verification */}
                    <small className="payment-status">
                        <div className={`verification-badge ${paymentVerified ? 'verified' : 'unverified'}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="icon">
                                <path
                                    fill="currentColor"
                                    fillRule="evenodd"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                    d="M20.4 13.1c.8 1 .3 2.5-.9 2.9-.8.2-1.3 1-1.3 1.8 0 1.3-1.2 2.2-2.5 1.8-.8-.3-1.7 0-2.1.7-.7 1.1-2.3 1.1-3 0-.5-.7-1.3-1-2.1-.7-1.4.4-2.6-.6-2.6-1.8 0-.8-.5-1.6-1.3-1.8-1.2-.4-1.7-1.8-.9-2.9.5-.7.5-1.6 0-2.2-.9-1-.4-2.5.9-2.9.8-.2 1.3-1 1.3-1.8C5.9 5 7.1 4 8.3 4.5c.8.3 1.7 0 2.1-.7.7-1.1 2.3-1.1 3 0 .5.7 1.3 1 2.1.7 1.4-.5 2.6.5 2.6 1.7 0 .8.5 1.6 1.3 1.8 1.2.4 1.7 1.8.9 2.9-.4.6-.4 1.6.1 2.2z"
                                />
                                <path
                                    stroke="#fff"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                    d="M15.5 9.7L11 14.3l-2.5-2.5"
                                />
                            </svg>
                        </div>
                        <strong className="payment-text">
                            Payment {paymentVerified ? 'verified' : 'unverified'}
                        </strong>
                    </small>

                    {/* Rating */}
                    <span className="client-rating">
                        <div className="rating-stars" style={{ '--rating': clientRating }}>
                            {[...Array(5)].map((_, i) => (
                                <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38 38" className="star">
                                    <path d="M21.28 2.63l3.57 9.6 9.85.55c.49.03.96.2 1.34.52.4.31.68.74.84 1.23.15.49.16 1.02.03 1.51-.14.5-.41.94-.79 1.27l-7.67 6.5 2.57 9.98c.12.5.09 1.03-.08 1.52-.17.49-.47.9-.87 1.21a2.36 2.36 0 01-2.76.06L19 30.95l-8.3 5.59a2.35 2.35 0 01-2.74-.04c-.4-.3-.7-.71-.88-1.2a2.72 2.72 0 01-.1-1.51l2.55-9.95-7.65-6.53a2.58 2.58 0 01-.79-1.27 2.7 2.7 0 01.03-1.51c.16-.49.45-.92.83-1.23.4-.31.86-.5 1.35-.52l9.85-.55 3.57-9.6c.18-.49.5-.9.9-1.19a2.37 2.37 0 012.76 0c.4.3.72.7.9 1.19z" />
                                </svg>
                            ))}
                        </div>
                    </span>

                    {/* Client Spending */}
                    <small className="client-spent">
                        <strong>${clientSpent}</strong> <span className="light-text">spent</span>
                    </small>

                    {/* Client Country */}
                    {clientCountry && (
                        <small className="client-country">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="icon-sm">
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                    d="M12 11.9a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"
                                />
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                    d="M18.4 9.4C18.4 5.9 15.6 3 12 3 8.4 3 5.6 5.9 5.6 9.4c0 1.5.6 2.9 1.5 4.1 1.3 1.8 5 7.5 5 7.5s3.6-5.7 5-7.5c.7-1.2 1.3-2.5 1.3-4.1z"
                                />
                            </svg>
                            {clientCountry}
                        </small>
                    )}
                </div>

                {/* Proposals */}
                {proposals && (
                    <div className="proposals-section">
                        <small className="proposals-text">
                            <span className="light-text">Proposals:</span>{' '}
                            <strong>{proposals}</strong>
                        </small>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ProjectCard;
