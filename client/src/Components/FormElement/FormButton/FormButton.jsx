import React from 'react'
import PropTypes from 'prop-types'


const FormButton = (props)=> {
    return (
        <div className="mt-4">
            <button type="submit"
                    disabled={ props.disabled }
                    className="btn-blue"
                    onClick={ props.submit }>{ props.button || 'Submit' }</button>
        </div>
    )
}

FormButton.propTypes = {
    submit:   PropTypes.func.isRequired,
    button:   PropTypes.string,
    disabled: PropTypes.bool
}

export default FormButton
