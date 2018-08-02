import React from 'react'

const FormInput = (props)=> {
    const createErrorMessage = ()=> {
        if(props.error !== null)
        {
            return (
                <p className="text-red text-xs italic">{ props.error }</p>
            )
        }
    }

    return (
        <div className="mb-4">
            <label className="block text-grey-darker text-sm font-bold mb-2">
                { props.label }
            </label>
            <input type={ (props.type) ? props.type : 'text'}
                   name={ props.name }
                   className={ "shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline " + (props.error ? "border-red" : "") }
                   value={ props.value }
                   onChange={ props.onInputChange } />
            { createErrorMessage() }
        </div>
    )
}

// <div className="form-group">
//     <label>{ this.props.label }</label>
//     <input type={ (this.props.type) ? this.props.type : 'text'}
//            name={ this.props.name }
//            className={ "form-control " + (this.props.error ? "is-invalid" : "") }
//            value={ this.props.value }
//            onChange={ this.props.onInputChange } />
//     { this.createErrorMessage() }
// </div>

export default FormInput
