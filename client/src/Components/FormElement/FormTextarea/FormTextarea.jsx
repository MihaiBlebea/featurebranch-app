import React from 'react'


const FormTextarea = (props)=> {
    return (
        <textarea onChange={ props.onInputChange }
                  name={ props.name }
                  className={ "shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline " + (props.error ? "border-red" : "") }
                  rows="4"
                  value={ props.value } />
    )
}

export default FormTextarea
