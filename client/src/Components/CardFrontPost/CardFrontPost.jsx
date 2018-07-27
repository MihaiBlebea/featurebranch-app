import React from 'react'
import PropTypes from 'prop-types';


const CardFrontPost = (props)=> {
    return (
        <div className="card">
            <img className="w-100"
                 alt="card-post"
                 style={{ cursor: 'pointer' }}
                 src={ props.imageUrl }
                 onClick={ props.onClickAction } />
            <div className="card-body">
                { props.title }
            </div>
        </div>
    )
}

CardFrontPost.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    onClickAction: PropTypes.func.isRequired
}

export default CardFrontPost
