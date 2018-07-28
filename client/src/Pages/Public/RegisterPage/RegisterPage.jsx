import React from 'react'
import { RegisterForm } from './../../../Forms'
import { TitleMain } from './../../../Components'
import { DefaultLayout } from './../../../Layouts'


const RegisterPage = ()=> {
    return (
        <DefaultLayout col="6" horizontalCenter>
            <TitleMain>Register</TitleMain>
            <RegisterForm />
        </DefaultLayout>
    )
}

export default RegisterPage
