import React from 'react'
import { TitleMain, CardDefault } from './../../../Components'
import { LoginForm } from './../../../Forms'
import { CentralContent } from './../../../Layouts'


const LoginPage = ()=> {
    return (
        <CentralContent>
            <TitleMain>Login</TitleMain>
            <CardDefault>
                <LoginForm />
            </CardDefault>
        </CentralContent>
    )
}

export default LoginPage
