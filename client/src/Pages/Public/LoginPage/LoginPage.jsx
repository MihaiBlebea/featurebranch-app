import React from 'react'
import { TitleMain, CardDefault } from './../../../Components'
import { LoginForm } from './../../../Forms'
import { DefaultLayout } from './../../../Layouts'


const LoginPage = ()=> {
    return (
        <DefaultLayout>
            <TitleMain>Login</TitleMain>
            <CardDefault>
                <LoginForm />
            </CardDefault>
        </DefaultLayout>
    )
}

export default LoginPage
