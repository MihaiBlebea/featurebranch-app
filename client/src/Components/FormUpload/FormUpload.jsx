import React from 'react'

const FormUpload = (props)=> {
    return (
        <div>
            <label className="btn btn-primary mb-0">
                Upload <input type="file" hidden onChange={ props.onInputChange } />
            </label>
        </div>
    )
}

export default FormUpload
