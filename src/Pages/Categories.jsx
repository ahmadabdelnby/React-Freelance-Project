import React from 'react'
import { Link } from 'react-router-dom'
import {
    FaCode,
    FaMobileAlt,
    FaPaintBrush,
    FaPenFancy,
    FaBullhorn,
    FaVideo,
    FaChartBar,
    FaDraftingCompass
} from 'react-icons/fa'
import './Categories.css'

function Categories() {
    const categories = [
        {
            id: 1,
            name: 'Web Development',
            icon: <FaCode />,
            description: 'Build and maintain websites and web applications',
            specialties: [
                'Front-End Development',
                'Back-End Development',
                'Full-Stack Development',
                'WordPress Development',
                'E-commerce Development',
                'Web Design',
                'API Development',
                'Database Development'
            ]
        },
        {
            id: 2,
            name: 'Mobile Development',
            icon: <FaMobileAlt />,
            description: 'Create mobile applications for iOS and Android',
            specialties: [
                'iOS Development',
                'Android Development',
                'React Native',
                'Flutter Development',
                'Mobile UI/UX Design',
                'App Testing',
                'Cross-Platform Development',
                'Mobile Game Development'
            ]
        },
        {
            id: 3,
            name: 'Design & Creative',
            icon: <FaPaintBrush />,
            description: 'Visual design and creative services',
            specialties: [
                'Graphic Design',
                'Logo Design',
                'UI/UX Design',
                'Illustration',
                'Brand Identity',
                '3D Design',
                'Presentation Design',
                'Packaging Design'
            ]
        },
        {
            id: 4,
            name: 'Writing & Translation',
            icon: <FaPenFancy />,
            description: 'Content creation and language services',
            specialties: [
                'Content Writing',
                'Copywriting',
                'Technical Writing',
                'Translation',
                'Proofreading',
                'Creative Writing',
                'Article Writing',
                'Resume Writing'
            ]
        },
        {
            id: 5,
            name: 'Digital Marketing',
            icon: <FaBullhorn />,
            description: 'Promote businesses and products online',
            specialties: [
                'SEO',
                'Social Media Marketing',
                'Email Marketing',
                'Content Marketing',
                'PPC Advertising',
                'Marketing Strategy',
                'Influencer Marketing',
                'Analytics & Reporting'
            ]
        },
        {
            id: 6,
            name: 'Video & Animation',
            icon: <FaVideo />,
            description: 'Video production and animation services',
            specialties: [
                'Video Editing',
                '2D Animation',
                '3D Animation',
                'Motion Graphics',
                'Whiteboard Animation',
                'Video Production',
                'Explainer Videos',
                'Visual Effects'
            ]
        },
        {
            id: 7,
            name: 'Data Science & Analytics',
            icon: <FaChartBar />,
            description: 'Data analysis and business intelligence',
            specialties: [
                'Data Analysis',
                'Machine Learning',
                'Data Visualization',
                'Business Intelligence',
                'Statistical Analysis',
                'Predictive Modeling',
                'Data Mining',
                'Big Data'
            ]
        },
        {
            id: 8,
            name: 'Engineering & Architecture',
            icon: <FaDraftingCompass />,
            description: 'Engineering and architectural design',
            specialties: [
                'CAD Design',
                '3D Modeling',
                'Architectural Design',
                'Civil Engineering',
                'Mechanical Engineering',
                'Electrical Engineering',
                'Structural Engineering',
                'Interior Design'
            ]
        }
    ]

    return (
        <div className="categories-page">
            {/* Hero Section */}
            <div className="categories-hero">
                <div className="container">
                    <h1 className="categories-hero-title">Browse Categories</h1>
                    <p className="categories-hero-subtitle">
                        Explore our diverse range of professional services and find the perfect match for your project
                    </p>
                </div>
            </div>

            {/* Categories Grid */}
            <div className="container">
                <div className="categories-grid">
                    {categories.map((category) => (
                        <div key={category.id} className="category-card">
                            <div className="category-card-header">
                                <div className="category-icon-wrapper">
                                    <div className="category-page-icon">{category.icon}</div>
                                </div>
                                <div className="category-info">
                                    <h3 className="category-name">{category.name}</h3>
                                    <p className="category-description">{category.description}</p>
                                </div>
                            </div>

                            <div className="category-specialties">
                                <h4 className="specialties-title">Specialties</h4>
                                <div className="specialties-list">
                                    {category.specialties.map((specialty, index) => (
                                        <Link
                                            key={index}
                                            to={`/jobs?category=${category.name}&specialty=${specialty}`}
                                            className="specialty-tag"
                                        >
                                            {specialty}
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            <Link to={`/jobs?category=${category.name}`} className="category-view-all">
                                View All Jobs in {category.name}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Categories
