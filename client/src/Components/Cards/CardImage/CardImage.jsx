import React from 'react'
import PropTypes from 'prop-types'

import { ButtonDefault } from './../../index'


const CardImage = (props)=> {
    return (
        <div className="container bg-white mx-auto shadow rounded bg-cover relative">
            <img className="w-full h-64" src={ props.imageUrl } alt="card" />
            <div className="flex justify-center bg-smoke absolute w-full pin-b">
                <div className="inline-flex justify-center mt-5 -mx-2">
                    <div className="px-2 mb-5">
                        <ButtonDefault click={ props.select }>Select</ButtonDefault>
                    </div>
                    <div className="px-2 mb-5">
                        <ButtonDefault click={ props.delete }>Delete</ButtonDefault>
                    </div>
                </div>
            </div>
        </div>
    )
}

CardImage.propTypes = {
    select:     PropTypes.func.isRequired,
    delete:     PropTypes.func.isRequired,
    imageUrl:   PropTypes.string.isRequired,
    isSelected: PropTypes.bool.isRequired
}

export default CardImage
