import React from 'react'

import { TitleMain, CardDefault } from './../../../Components'
import { ProfileForm } from './../../../Forms'
import { DefaultLayout } from './../../../Layouts'


const ProfilePage = ()=> {
    return (
        <DefaultLayout>
            <TitleMain>Profile</TitleMain>
            <div className="flex flex-wrap">
                <div className="w-2/3 ml-auto mx-auto">
                    <ProfileForm />
                </div>
            </div>
        </DefaultLayout>
    )
}

export default ProfilePage
