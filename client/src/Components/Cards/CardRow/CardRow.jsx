import React from 'react'
import PropTypes from 'prop-types'


const CardRow = (props)=> {
    return (
        <div className="flex items-center border border-grey-light p-4 bg-white">
            { props.children }
        </div>
    )
}

export default CardRow
