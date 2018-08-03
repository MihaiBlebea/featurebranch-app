import React from 'react'
import PropTypes from 'prop-types'


const FormButton = (props)=> {
    return (
        <div className="mt-4">
            <button type="submit"
                    disabled={ props.disabled }
                    className="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded"
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
