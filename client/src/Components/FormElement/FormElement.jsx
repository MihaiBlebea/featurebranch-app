import React from 'react'
import PropTypes from 'prop-types'

import {
    FormInput,
    FormTextarea,
    FormSelect,
    FormImage,
    FormMarkdown } from './index'


const FormElement = (props)=> {
    let formElement = null

    switch(props.elementType)
    {
        case('input'):
            formElement = <FormInput { ...props } />
            break
        case('textarea'):
            formElement = <FormTextarea { ...props } />
            break
        case('select'):
            formElement = <FormSelect { ...props } />
            break
        case('image'):
            formElement = <FormImage { ...props } />
            break
        case('markdown'):
            formElement = <FormMarkdown { ...props } />
            break
        default:
            formElement = <FormInput { ...props } />
            break
    }

    const errorMessage = ()=> {
        if(props.error !== null)
        {
            return (
                <div className="invalid-feedback">{ props.error }</div>
            )
        }
    }

    return (
        <div className="form-group">
            <label>{ props.label }</label>
            { formElement }
            { errorMessage() }
        </div>
    )
}

FormElement.propTypes = {
    elementType:  PropTypes.string.isRequired,
    error:        PropTypes.string
}

export default FormElement
