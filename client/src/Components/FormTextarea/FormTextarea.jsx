import React from 'react'

class FormTextarea extends React.Component
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
                <textarea onChange={ this.props.onInputChange }
                          name={ this.props.name }
                          className={ "form-control " + (this.props.error ? "is-invalid" : "") }
                          rows="3"
                          value={ this.props.value } />
                { this.createErrorMessage() }
            </div>
        )
    }
}

export default FormTextarea
