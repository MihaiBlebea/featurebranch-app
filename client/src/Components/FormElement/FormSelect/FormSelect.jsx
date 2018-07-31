import React from 'react'

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
                className={ "form-control " + (props.error ? "is-invalid" : "") }
                onChange={ props.onInputChange }>
            <option value='default' disabled>{ props.placeholder || defaultPlaceholder }</option>
            { createOptions() }
        </select>
    )
}

export default FormSelect
