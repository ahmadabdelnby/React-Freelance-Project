import React from 'react';
import './AboutTab.css';

const AboutTab = ({ userData }) => {
    return (
        <div className="about-tab">
            {/* About Me Section */}
            <section className="about-section">
                <h3 className="section-title">About Me</h3>
                <p className="about-text">{userData.about}</p>
            </section>

             {/* Goals Section */}
            <section className="about-section">
                <h3 className="section-title">Professional Goals</h3>
                <p className="about-text">{userData.goals}</p>
            </section>

            {/* Skills Section */}
            <section className="about-section">
                <h3 className="section-title">Skills</h3>
                <div className="skills-container">
                    {userData.skills.map((skill, index) => (
                        <span key={index} className="skill-tag">
                            {skill}
                        </span>
                    ))}
                </div>
            </section>

           
        </div>
    );
};

export default AboutTab;
