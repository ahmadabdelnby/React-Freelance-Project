import React from 'react'
import './UserProfile.css'
import ProfileHeader from '../../Components/user-profile/ProfileHeader'
import ProfileTabs from '../../Components/user-profile/ProfileTap'

const UserProfile = () => {
    return (
        <div className="user-profile-page">
            <ProfileHeader />
            <ProfileTabs />
        </div>
    )
}

export default UserProfile