import React from 'react'
import { TitleMain } from './../../../Components'
import { DefaultLayout } from './../../../Layouts'
import { MainHero, FeatureBoxes, CategoryBanner, PostSection } from './../../../Sections'


const HomePage = ()=> {
    return (
        <div>
            <MainHero />
            <FeatureBoxes />
            <CategoryBanner />
            <PostSection />
        </div>
    )
}

export default HomePage
