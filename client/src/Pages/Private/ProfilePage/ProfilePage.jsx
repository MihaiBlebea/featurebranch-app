import React from 'react'

import { TitleMain } from './../../../Components'
import { ProfileForm } from './../../../Forms'


const ProfilePage = ()=> {
    return (
        <div className="container mx-auto">
            <TitleMain>Profile</TitleMain>
            <ProfileForm />
        </div>
    )
}

export default ProfilePage
