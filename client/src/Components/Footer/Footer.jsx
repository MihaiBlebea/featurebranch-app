import React from 'react'
import moment from 'moment'

import { NavigationSocial, NavigationSecondary } from './../index'
import links from './navigation.json'


const Footer = ()=> {
    const createSignature = ()=> {
        return (
            <div>FeatureBranch | {  moment().format('MMMM YYYY') }</div>
        )
    }

    return (
        <div className="bg-grey-light">
            <div className="flex text-white container mx-auto">
                <div className="w-1/2 h-12 p-4">
                    <NavigationSecondary links={ links }/>
                </div>
                <div className="w-1/2 h-12 p-4">
                    <NavigationSocial facebook="ceva"
                                      twitter="altceva"
                                      linkedin="din nou ceva"
                                      github="github" />
                </div>
            </div>
            <div className="bg-indigo text-white p-6 text-center">
                { createSignature() }
            </div>
        </div>
    )
}

export default Footer
