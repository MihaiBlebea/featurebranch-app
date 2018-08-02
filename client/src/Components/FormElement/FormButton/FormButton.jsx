import React from 'react'

const FormButton = (props)=> {
    return (
        <div className="mt-4">
            <button type="submit"
                    className="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded"
                    onClick={ props.submit }>{ props.button || 'Submit' }</button>
        </div>
    )
}

export default FormButton
