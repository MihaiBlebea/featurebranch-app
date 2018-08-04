import React from 'react'
import PropTypes from 'prop-types'


const FormSelect = (props)=> {
    const createOptions = ()=> {
        if(props.options !== null)
        {
            return props.options.map((option, index)=> {
                return (
                    <option value={ option.value } key={ props.name + '_' + index }>{ option.label }</option>
                )
            })
        }
        return null
    }

    const defaultPlaceholder = 'Select a value'

    return (
        <select value={ props.value }
                name={ props.name }
                className={ "block appearance-none w-full bg-white border border-grey-light hover:border-grey px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline " + (props.error ? "is-invalid" : "") }
                onChange={ props.onInputChange }>
            <option value='default' disabled>{ props.placeholder || defaultPlaceholder }</option>
            { createOptions() }
        </select>
    )
}

FormSelect.propTypes = {
    options: PropTypes.array.isRequired
}

export default FormSelect
