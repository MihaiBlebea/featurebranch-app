import React from 'react'

const FormInput = (props)=> {
    return (
        <input type={ props.type }
               name={ props.name }
               placeholder={ props.placeholder }
               className={ "form-control " + (props.error ? "is-invalid" : "") }
               value={ props.value }
               onChange={ props.onInputChange } />
    )
}

export default FormInput
