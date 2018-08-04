import React from 'react'
import PropTypes from 'prop-types'


const CardStacked = (props)=> {
    return (
        <div className="w-100 rounded overflow-hidden shadow-lg bg-white">
            <img className="w-full h-64" src={ props.imageUrl } alt="card" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-center">{ props.title }</div>
                { props.children }
            </div>
        </div>
    )
}

CardStacked.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    title:    PropTypes.string,
}

export default CardStacked
