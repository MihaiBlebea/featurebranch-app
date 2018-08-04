import React from 'react'
import PropTypes from 'prop-types'

import { CardDefault } from './../../index'


const CardComment = (props)=> {
    const createImage = ()=> {
        if(props.imageUrl)
        {
            return (
                <img className="w-10 h-10 rounded-full mr-4"
                     src={ props.imageUrl } alt="card-author" />
            )
        }
        return null
    }

    return (
        <CardDefault>
            { createImage() }
            <div>
                <p className="text-black leading-none mb-1">
                    <strong className="mr-1">{ props.subject }</strong>
                    <span className="text-sm"> - { props.author }</span>
                </p>
                <p className="text-grey-dark">{ props.content }</p>
            </div>
        </CardDefault>
    )
}

CardComment.propTypes = {
    author:   PropTypes.string.isRequired,
    subject:  PropTypes.string.isRequired,
    content:  PropTypes.string.isRequired,
    imageUrl: PropTypes.string,
}

export default CardComment
