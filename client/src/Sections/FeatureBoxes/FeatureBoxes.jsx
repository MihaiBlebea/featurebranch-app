import React from 'react'
import random from 'randomstring'

import { FeatureBox } from './../index'
import boxes from './schema'


const FeatureBoxes = ()=> {
    const createBoxes = ()=> {
        return boxes.map((box)=> {
            return (
                <div className="col-md-4" key={ random.generate(6) }>
                    <FeatureBox title={ box.title }
                                bullets={ box.bullets }
                                action={ box.cta }/>
                </div>
            )
        })
    }

    return (
        <div className="py-5">
            <div className="container">
                <div className="row">
                    { createBoxes() }
                </div>
            </div>
        </div>
    )
}

export default FeatureBoxes
