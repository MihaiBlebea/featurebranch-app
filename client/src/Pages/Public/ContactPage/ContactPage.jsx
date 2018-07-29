import React from 'react'
import { TitleMain, TitleChapter } from './../../../Components'
import { DefaultLayout } from './../../../Layouts'
import { ContactForm } from './../../../Forms'


const ContactPage = ()=> {
    return (
        <div>
            <DefaultLayout>
                <TitleMain>Contact Page</TitleMain>
                <div className="row">
                    <div className="col-md-6">
                        <TitleChapter>Have a project? let's talk about it</TitleChapter>
                        <ContactForm />
                    </div>

                    <div className="col-md-6">
                        <TitleChapter>Where are we base?</TitleChapter>
                        Google map
                    </div>
                </div>
            </DefaultLayout>
        </div>
    )
}

export default ContactPage
