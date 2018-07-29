import React from 'react'
import PropTypes from 'prop-types'


const CardAuthor = (props)=> {
    return (
        <div className="card">
            <div className="card-body">
                <p>{ props.name }</p>
            </div>
        </div>
    )
}

CardAuthor.propTypes = {
    name: PropTypes.string.isRequired
}

export default CardAuthor
