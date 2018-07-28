import React from 'react'
import { RegisterForm } from './../../../Forms'
import { TitleMain } from './../../../Components'

const RegisterPage = ()=> {
    return (
        <div className="row justify-content-center">
            <div className="col-md-6">
                <TitleMain>Register</TitleMain>
                <RegisterForm />
            </div>
        </div>
    )
}

export default RegisterPage
