import React from 'react'
import PropTypes from 'prop-types'


const CardAuthor = (props)=> {
    return (
        <div className="flex items-center border border-grey-light p-5">
            <img className="w-10 h-10 rounded-full mr-4"
                 src={ props.imageUrl }
                 alt="card-author" />
            <div>
                <p className="text-black leading-none mb-1"><strong>{ props.title }</strong></p>
                <p className="text-grey-dark">{ props.subtitle }</p>
            </div>
        </div>
    )
}

CardAuthor.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    title:    PropTypes.string.isRequired,
    subtitle: PropTypes.string
}

export default CardAuthor
