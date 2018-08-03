import React from 'react'
import PropTypes from 'prop-types'

import {
    FormInput,
    FormTextarea,
    FormSelect,
    FormImage,
    FormMarkdown,
    FormUpload } from './index'


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
        case('upload'):
            formElement = <FormUpload { ...props } />
            break
        default:
            formElement = <FormInput { ...props } />
            break
    }

    const errorMessage = ()=> {
        if(props.error !== null)
        {
            return (
                <p className="text-red text-xs italic mt-2">{ props.error }</p>
            )
        }
    }

    return (
        <div className="mb-4">
            <label className="block text-grey-darker text-sm font-bold mb-2">
                { props.label }
            </label>
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
