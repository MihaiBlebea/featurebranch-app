import React from 'react'

const FormSelect = (props)=> {
    const createErrorMessage = ()=> {
        if(props.error !== null)
        {
            return (
                <div className="invalid-feedback">{ props.error }</div>
            )
        }
    }

    const createOptions = ()=> {
        if(props.options !== null)
        {
            return props.options.map((option, index)=> {
                return (
                    <option value={ option.value } key={ `${props.name}_${index}` }>{ option.label }</option>
                )
            })
        }
        return null
    }

    const defaultPlaceholder = 'Select a value'

    return (
        <div className="form-group">
            <label>{ props.label }</label>

            <select value={ props.value }
                    name={ props.name }
                    className={ "form-control " + (props.error ? "is-invalid" : "") }
                    onChange={ props.onInputChange }>
                <option value='default' disabled>{ props.placeholder || defaultPlaceholder }</option>
                { createOptions() }
            </select>
            { createErrorMessage() }
        </div>
    )
}

export default FormSelect
