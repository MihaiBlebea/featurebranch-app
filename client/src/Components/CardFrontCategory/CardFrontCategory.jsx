import React from 'react'
import PropTypes from 'prop-types';

import './CardFrontCategory.css'

const CardFrontCategory = (props)=> {
    return (
        <div className="CardFrontCategory card">
            <div className="Image-Wrapper">
                <img className="Image w-100"
                     alt="card-category"
                     style={{ cursor: 'pointer' }}
                     src={ props.imageUrl }
                     onClick={ props.onClickAction } />
            </div>
            <div className="card-body text-center p-1">
                { props.title }
            </div>
        </div>
    )
}

CardFrontCategory.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    onClickAction: PropTypes.func.isRequired
}

export default CardFrontCategory
