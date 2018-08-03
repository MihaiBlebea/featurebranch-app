import React from 'react'


const FormUpload = (props)=> {
    return (
        <div>
            <label className="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded">
                Upload <input type="file" hidden onChange={ props.onInputChange } />
            </label>
        </div>
    )
}

export default FormUpload
