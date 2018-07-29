import React from 'react'
import { TitleMain } from './../../../Components'
import { LoginForm } from './../../../Forms'
import { DefaultLayout } from './../../../Layouts'


const LoginPage = ()=> {
    return (
        <DefaultLayout col={ 6 } horizontalCenter>
            <TitleMain>Login</TitleMain>
            <LoginForm />
        </DefaultLayout>
    )
}

export default LoginPage
