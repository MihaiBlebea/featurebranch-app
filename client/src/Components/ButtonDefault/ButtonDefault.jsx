import React from 'react'
import PropTypes from 'prop-types'


const ButtonDefault = (props)=> {
    return (
        <button onClick={ props.click } className="btn-blue">
            { props.children }
        </button>
    )
}

ButtonDefault.propTypes = {
    click: PropTypes.func.isRequired
}

export default ButtonDefault
