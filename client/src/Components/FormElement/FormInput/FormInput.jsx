import React from 'react'
import PropTypes from 'prop-types'


const FormInput = (props)=> {
    return (
        <input type={ props.type }
               name={ props.name }
               placeholder={ props.placeholder }
               className={ "shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline " + (props.error ? "border-red" : "") }
               value={ props.value }
               onChange={ props.onInputChange } />
    )
}

FormInput.propTypes = {
    type:          PropTypes.string.isRequired,
    name:          PropTypes.string.isRequired,
    onInputChange: PropTypes.func.isRequired,
    placeholder:   PropTypes.string,
    value:         PropTypes.string,
    error:         PropTypes.string
}

export default FormInput
