import React from 'react'

const ImagePreview = (props)=> {
    return (
        <div>
            <img src={ props.url } className="w-100 img-thumbnail" alt="" />
        </div>
    )
}

export default ImagePreview
