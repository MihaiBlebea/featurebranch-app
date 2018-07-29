import React from 'react'
import moment from 'moment'

import { ButtonSocial, NavigationSecondary } from './../index'
import links from './navigation.json'

const Footer = ()=> {
    const createSignature = ()=> {
        return (
            <div>FeatureBranch | {  moment().format('MMMM YYYY') }</div>
        )
    }

    return (
        <div>
            <div className="bg-primary text-white py-3">
                <div className="container">
                    <div className="row justify-content-between">
                        <NavigationSecondary links={ links }/>
                        <ButtonSocial facebook="ceva"
                                      twitter="altceva"
                                      linkedin="din nou ceva"
                                      github="github" />
                    </div>
                </div>
            </div>
            <div className="bg-secondary text-white text-center py-3">
                { createSignature() }
            </div>
        </div>
    )
}

export default Footer
