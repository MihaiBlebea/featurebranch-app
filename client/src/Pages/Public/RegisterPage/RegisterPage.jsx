import React from 'react'
import { RegisterForm } from './../../../Forms'
import { TitleMain, CardDefault } from './../../../Components'
import { DefaultLayout } from './../../../Layouts'


const RegisterPage = ()=> {
    return (
        <DefaultLayout>
            <TitleMain>Register</TitleMain>
            <CardDefault>
                <RegisterForm />
            </CardDefault>
        </DefaultLayout>
    )
}

export default RegisterPage
