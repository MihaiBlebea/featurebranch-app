import React from 'react'
import { TitleMain } from './../../../Components'
import { DefaultLayout } from './../../../Layouts'
import { ProfileForm } from './../../../Forms'


const ProfilePage = ()=> {
    return (
        <DefaultLayout>
            <TitleMain>Profile</TitleMain>
            <ProfileForm />
        </DefaultLayout>
    )
}

export default ProfilePage
