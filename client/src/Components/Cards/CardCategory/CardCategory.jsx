import React from 'react'
import PropTypes from 'prop-types'

import { CardHorizontal } from './../index'


const CardCategory = (props)=> {
    return (
        <div>
            <CardHorizontal imageUrl={ props.imageUrl } title={ props.title }>
                <p>{props.postsCount } posts</p>
            </CardHorizontal>
        </div>
    )
}

CardCategory.propTypes = {
    imageUrl:   PropTypes.string.isRequired,
    title:      PropTypes.string,
    postsCount: PropTypes.number
}

export default CardCategory
