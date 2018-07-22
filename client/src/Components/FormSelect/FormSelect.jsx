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
        console.log(props)
        if(props.options !== null)
        {
            return props.options.map((option)=> {
                return (
                    <option value={ option.value }>{ option.label }</option>
                )
            })
        }
        return ( <option disabled>Select option</option> )
    }

    return (
        <div className="form-group">
            <label>{ props.label }</label>

            <select value={ props.value }
                    name={ props.name }
                    className={ "form-control " + (props.error ? "is-invalid" : "") }
                    onChange={ props.onInputChange }>
                { createOptions() }
            </select>
            { createErrorMessage() }
        </div>
    )
}

export default FormSelect
