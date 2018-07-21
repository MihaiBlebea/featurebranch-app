import React from 'react'

const ImagePreview = (props)=> {
    return (
        <div>
            <img src={ props.url } className="w-100 img-thumbnail"/>
        </div>
    )
}

export default ImagePreview
