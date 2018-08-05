import React from 'react'

import { TitleMain, CardDefault } from './../../../Components'
import { CentralContent } from './../../../Layouts'
import { ContactForm } from './../../../Forms'


const ContactPage = ()=> {
    return (
        <CentralContent>
            <TitleMain>Contact Page</TitleMain>
            <CardDefault>
                <ContactForm />
            </CardDefault>
        </CentralContent>
    )
}

export default ContactPage
