import React from 'react'
import { TitleMain } from './../../Components'
import { LoginForm } from './../../Forms'

const LoginPage = ()=> {
    return (
        <div className="row justify-content-center">
            <div class="col-md-6">
                <TitleMain>Login</TitleMain>
                <LoginForm />
            </div>
        </div>
    )
}

export default LoginPage
