import { useState } from "react";
import { FaEdit, FaPlus } from "react-icons/fa";
import ProfileSidebar from "./ProfileSidebar";
import AboutTab from "./tabs/AboutTab";
import ReviewsTab from "./tabs/ReviewsTab";
import PortfolioTab from "./tabs/PortfolioTab";
import ProjectsTab from "./tabs/ProjectsTab";
import { mockUserData } from "../../data/mockUserData";
import "./ProfileTabs.css";

function ProfileTabs() {
    const [activeTab, setActiveTab] = useState("about");

    const tabs = [
        { id: "about", label: "About" },
        { id: "portfolio", label: "Portfolio" },
        { id: "reviews", label: "Reviews" },
        { id: "projects", label: "Projects" },
    ];

    const renderTabContent = () => {
        switch (activeTab) {
            case "about":
                return <AboutTab userData={mockUserData} />;
            case "reviews":
                return <ReviewsTab reviews={mockUserData.reviews} />;
            case "projects":
                return <ProjectsTab projects={mockUserData.projects} />;
            case "portfolio":
                return <PortfolioTab portfolio={mockUserData.portfolio} />;
            default:
                return <AboutTab userData={mockUserData} />;
        }
    };

    return (
        <div className="container">
            <div className="profile-tabs-container">
                {/* Tabs Navigation */}
                <nav className="tabs-navigation">
                    <ul className="tabs-list">
                        {tabs.map(tab => (
                            <li key={tab.id}>
                                <button
                                    className={`tab-button ${activeTab === tab.id ? "active" : ""}`}
                                    onClick={() => setActiveTab(tab.id)}
                                >
                                    {tab.label}
                                </button>
                            </li>
                        ))}
                    </ul>

                    <div className="profile-actions">
                        {activeTab === "portfolio" && (
                            <button className="add-work-btn">
                                <FaPlus />
                                Add Work
                            </button>
                        )}
                        <button className="edit-profile-btn">
                            <FaEdit />
                            Edit Profile
                        </button>
                    </div>
                </nav>

                {/* Main Content Layout */}
                <div className="profile-content-layout">
                    {/* Dynamic Content */}
                    <main className="profile-main-content">
                        {renderTabContent()}
                    </main>

                    {/* Static Sidebar */}
                    <aside className="sidebar-content">
                        <ProfileSidebar userData={mockUserData} />
                    </aside>
                </div>
            </div>
        </div>
    );
}

export default ProfileTabs;
