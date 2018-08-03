import React from 'react'
import PropTypes from 'prop-types'


const ButtonDefault = (props)=> {
    return (
        <button onClick={ props.click } className="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded">
            { props.children }
        </button>
    )
}

ButtonDefault.propTypes = {
    click: PropTypes.func.isRequired
}

export default ButtonDefault
