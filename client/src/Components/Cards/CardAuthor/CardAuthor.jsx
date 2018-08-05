import React from 'react'
import PropTypes from 'prop-types'


const CardAuthor = (props)=> {
    const createProfileImage = ()=> {
        if(props.imageUrl)
        {
            return (
                <img className="w-10 h-10 rounded-full mr-4"
                     src={ props.imageUrl }
                     alt="card-author" />
            )
        }
        return null
    }

    return (
        <div className="flex items-center border border-grey-light bg-white p-5">
            { createProfileImage() }
            <div>
                <p className="text-black leading-none mb-1"><strong>{ props.title }</strong></p>
                <p className="text-grey-dark">{ props.subtitle }</p>
            </div>
        </div>
    )
}

CardAuthor.propTypes = {
    title:    PropTypes.string.isRequired,
    imageUrl: PropTypes.string,
    subtitle: PropTypes.string
}

export default CardAuthor
