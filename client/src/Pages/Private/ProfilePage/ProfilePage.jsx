import React from 'react'

import { TitleMain, CardDefault } from './../../../Components'
import { ProfileForm } from './../../../Forms'
import { DefaultLayout } from './../../../Layouts'


const ProfilePage = ()=> {
    return (
        <DefaultLayout>
            <TitleMain>Profile</TitleMain>
            <CardDefault>
                <ProfileForm />
            </CardDefault>
        </DefaultLayout>
    )
}

export default ProfilePage
