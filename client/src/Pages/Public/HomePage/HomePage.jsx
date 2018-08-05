import React from 'react'

import {
    CardDefault,
    TitleMain,
    BlogContent,
    ModalLead,
    ButtonDefault } from './../../../Components'
import { MainHero, Banner, DefaultLayout } from './../../../Layouts'
import { ContactForm } from './../../../Forms'


const HomePage = (props)=> {
    const handleModalLead = ()=> {
        alert('modal')
    }

    return (
        <div>
            <MainHero bgColor="blue">
                <div className="flex flex-wrap justify-center">
                    <div className="w-1/2">
                        <img src="/img/homepage-hero.png" />
                    </div>
                    <div className="w-1/2">
                        <TitleMain>Contact me</TitleMain>
                    </div>
                </div>
            </MainHero>
            <Banner>
                <ButtonDefault click={ ()=> handleModalLead() }>Sign up</ButtonDefault>
            </Banner>
            <div className="pt-10">
                <TitleMain>Latest posts</TitleMain>
                <DefaultLayout>
                    <BlogContent />
                </DefaultLayout>
            </div>
            <div className="pb-10">
                <div className="flex flex-wrap justify-center">
                    <div className="w-1/2">
                        <TitleMain>Contact me</TitleMain>
                        <CardDefault>
                            <ContactForm />
                        </CardDefault>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage
