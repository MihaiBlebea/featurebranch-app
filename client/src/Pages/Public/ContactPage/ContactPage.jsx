import React from 'react'

import { TitleMain, CardDefault } from './../../../Components'
import { DefaultLayout } from './../../../Layouts'
import { ContactForm } from './../../../Forms'


const ContactPage = ()=> {
    return (
        <DefaultLayout>
            <TitleMain>Contact Page</TitleMain>
            <CardDefault>
                <ContactForm />
            </CardDefault>
        </DefaultLayout>
    )
}

export default ContactPage
