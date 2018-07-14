import React from 'react'

class FormInput extends React.Component
{
    createErrorMessage()
    {
        if(this.props.error !== null)
        {
            return (
                <div className="invalid-feedback">{ this.props.error }</div>
            )
        }
    }

    render()
    {
        return (
            <div className="form-group">
                <label>{ this.props.label }</label>
                <input type={ (this.props.type) ? this.props.type : 'text'}
                       name={ this.props.name }
                       className={ "form-control " + (this.props.error ? "is-invalid" : "") }
                       value={ this.props.value }
                       onChange={ this.props.onInputChange } />
                { this.createErrorMessage() }
            </div>
        )
    }
}

export default FormInput
