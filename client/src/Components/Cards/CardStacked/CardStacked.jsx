import React from 'react'
import PropTypes from 'prop-types'


const CardStacked = (props)=> {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src={ props.image } alt="card" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{ props.title }</div>
                { props.children }
            </div>
        </div>
    )
}

CardStacked.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string,
}

export default CardStacked
