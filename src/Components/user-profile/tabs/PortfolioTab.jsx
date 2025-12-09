import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import './PortfolioTab.css';

const PortfolioTab = ({ portfolio }) => {
    return (
        <div className="portfolio-tab">
            <div className="portfolio-header">
                <h3 className="portfolio-title">Portfolio</h3>
                <p className="portfolio-count">{portfolio.length} projects</p>
            </div>

            <div className="portfolio-grid">
                {portfolio.map((project) => (
                    <div key={project.id} className="portfolio-card">
                        <div className="portfolio-image">
                            <img src={project.image} alt={project.title} />
                            <div className="portfolio-overlay">
                                <div className="portfolio-actions">
                                    {project.liveUrl && (
                                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="portfolio-link">
                                            <FaExternalLinkAlt />
                                        </a>
                                    )}
                                    {project.githubUrl && (
                                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="portfolio-link">
                                            <FaGithub />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="portfolio-content">
                            <h4 className="portfolio-project-title">{project.title}</h4>
                            <p className="portfolio-description">{project.description}</p>

                            <div className="portfolio-tech">
                                {project.technologies.map((tech, index) => (
                                    <span key={index} className="tech-badge">{tech}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PortfolioTab;
