import React from 'react'
import PropTypes from 'prop-types';


const CardFrontCategory = (props)=> {
    return (
        <div className="card">
            <img className="w-100"
                 alt="card-category"
                 style={{ cursor: 'pointer' }}
                 src={ props.imageUrl }
                 onClick={ props.onClickAction } />
            <div className="card-body">
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
