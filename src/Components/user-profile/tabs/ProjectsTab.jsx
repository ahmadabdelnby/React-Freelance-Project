import React from 'react';
import { FaCalendarAlt, FaDollarSign, FaCheckCircle } from 'react-icons/fa';
import './ProjectsTab.css';

const ProjectsTab = ({ projects }) => {
    return (
        <div className="projects-tab">
            <div className="projects-header">
                <h3 className="projects-title">Completed Projects</h3>
                <p className="projects-count">{projects.length} projects</p>
            </div>

            <div className="projects-list">
                {projects.map((project) => (
                    <div key={project.id} className="project-card">
                        <div className="project-header">
                            <h4 className="project-title">{project.title}</h4>
                            <span className={`project-status ${project.status}`}>
                                <FaCheckCircle className="status-icon" />
                                {project.status}
                            </span>
                        </div>

                        <p className="project-description">{project.description}</p>

                        <div className="project-details">
                            <div className="project-detail-item">
                                <FaDollarSign className="detail-icon" />
                                <span className="detail-label">Budget:</span>
                                <span className="detail-value">${project.budget}</span>
                            </div>

                            <div className="project-detail-item">
                                <FaCalendarAlt className="detail-icon" />
                                <span className="detail-label">Duration:</span>
                                <span className="detail-value">{project.duration}</span>
                            </div>

                            <div className="project-detail-item">
                                <FaCalendarAlt className="detail-icon" />
                                <span className="detail-label">Completed:</span>
                                <span className="detail-value">{project.completedDate}</span>
                            </div>
                        </div>

                        <div className="project-technologies">
                            {project.technologies.map((tech, index) => (
                                <span key={index} className="tech-tag">{tech}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectsTab;
