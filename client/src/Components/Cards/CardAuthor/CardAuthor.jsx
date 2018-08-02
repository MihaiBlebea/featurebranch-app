import React from 'react'
import PropTypes from 'prop-types'


const CardAuthor = (props)=> {
    return (
        <div className="flex items-center">
            <img className="w-10 h-10 rounded-full mr-4"
                 src={ props.image }
                 alt="card-author" />
            <div className="text-sm">
                <p className="text-black leading-none">{ props.title }</p>
                <p className="text-grey-dark">{ props.subtitle }</p>
            </div>
        </div>
    )
}

CardAuthor.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string,
    subtitle: PropTypes.string
}

export default CardAuthor
