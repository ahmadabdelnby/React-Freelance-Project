import React from 'react'
import './ProfileHeader.css'
import { FaMapMarkerAlt, FaBriefcase, FaUser, FaCircle } from "react-icons/fa";
import { mockUserData } from '../../data/mockUserData';

const ProfileHeader = () => {
    return (
        <div className='ProfileHeader'>
            <div className="profile-image-container">
                <img className='userImg' src={mockUserData.profileImage} alt={mockUserData.name} />
                {mockUserData.isOnline && <FaCircle className="online-indicator" />}
            </div>

            <h1 className='userName'>{mockUserData.name}</h1>

            <div className='user-info-container'>
                <ul className='user-info-list'>
                    <li className='header-info-item'>
                        <FaMapMarkerAlt className='info-icon' />
                        <span>{mockUserData.location}</span>
                    </li>
                    <li className='header-info-item'>
                        <FaBriefcase className='info-icon' />
                        <span>{mockUserData.title}</span>
                    </li>
                    <li className='header-info-item'>
                        <FaUser className='info-icon' />
                        <span>Freelancer</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ProfileHeader