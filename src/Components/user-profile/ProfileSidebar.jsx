import React from 'react';
import { FaStar, FaCheckCircle, FaTimesCircle, FaClock } from 'react-icons/fa';
import './ProfileSidebar.css';

const ProfileSidebar = ({ userData }) => {
    return (
        <aside className="profile-sidebar">
            {/* Statistics Section */}
            <div className="sidebar-card">
                <h3 className="sidebar-title">Statistics</h3>

                <div className="stat-item">
                    <div className="stat-label">
                        <FaStar className="stat-icon star" />
                        Rating
                    </div>
                    <div className="stat-value">
                        <div className="rating-stars">
                            {[...Array(5)].map((_, i) => (
                                <FaStar key={i} className="star-filled" />
                            ))}
                        </div>
                        <span className="rating-count">({userData.reviewsCount})</span>
                    </div>
                </div>

                <div className="stat-item">
                    <span className="stat-label">Completed Projects</span>
                    <span className="stat-value stat-percentage">{userData.projectCompletion}%</span>
                </div>

                <div className="stat-item">
                    <span className="stat-label">On-Time Delivery</span>
                    <span className="stat-value stat-percentage">{userData.onTimeDelivery}%</span>
                </div>

                <div className="stat-item">
                    <span className="stat-label">Rehire Rate</span>
                    <span className="stat-value stat-percentage">{userData.rehireRate}%</span>
                </div>

                <div className="stat-item">
                    <span className="stat-label">Communication Success</span>
                    <span className="stat-value stat-percentage">{userData.communicationSuccess}%</span>
                </div>

                <div className="stat-item">
                    <div className="stat-label">
                        <FaClock className="stat-icon" />
                        Avg Response Time
                    </div>
                    <span className="stat-value">{userData.avgResponseTime} min</span>
                </div>

                <div className="stat-item">
                    <span className="stat-label">Completed Projects</span>
                    <span className="stat-value">{userData.completedProjects}</span>
                </div>
            </div>

            {/* Verifications Section */}
            <div className="sidebar-card">
                <h3 className="sidebar-title">Verifications</h3>

                {userData.verifications.map((verification, index) => (
                    <div key={index} className="verification-item">
                        {verification.verified ? (
                            <FaCheckCircle className="verification-icon verified" />
                        ) : (
                            <FaTimesCircle className="verification-icon unverified" />
                        )}
                        <span className={verification.verified ? 'verified-text' : 'unverified-text'}>
                            {verification.name}
                        </span>
                    </div>
                ))}
            </div>

            {/* Membership Info */}
            <div className="sidebar-card">
                <h3 className="sidebar-title">Membership Info</h3>

                <div className="info-item">
                    <span className="info-label">Registration Date</span>
                    <span className="info-value">{userData.registrationDate}</span>
                </div>

                <div className="info-item">
                    <span className="info-label">Last Seen</span>
                    <span className="info-value">{userData.lastSeen}</span>
                </div>
            </div>
        </aside>
    );
};

export default ProfileSidebar;
