import React from 'react'

const FormTextarea = (props)=> {
    return (
        <textarea onChange={ props.onInputChange }
                  name={ props.name }
                  className={ "form-control " + (props.error ? "is-invalid" : "") }
                  rows="4"
                  value={ props.value } />
    )
}

export default FormTextarea
