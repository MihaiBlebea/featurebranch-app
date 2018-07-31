import React from 'react'

const FormButton = (props)=> {
    return (
        <div className="form-group">
            <button type="submit"
                    className="btn btn-primary"
                    onClick={ props.submit }>{ props.button || 'Submit' }</button>
        </div>
    )
}

export default FormButton
