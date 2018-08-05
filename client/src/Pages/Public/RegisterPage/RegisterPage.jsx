import React from 'react'
import { RegisterForm } from './../../../Forms'
import { TitleMain, CardDefault } from './../../../Components'
import { CentralContent } from './../../../Layouts'


const RegisterPage = ()=> {
    return (
        <CentralContent>
            <TitleMain>Register</TitleMain>
            <CardDefault>
                <RegisterForm />
            </CardDefault>
        </CentralContent>
    )
}

export default RegisterPage
