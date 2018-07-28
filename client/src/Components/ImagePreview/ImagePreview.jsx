import React from 'react'
import PropTypes from 'prop-types'


const ImagePreview = (props)=> {
    return (
        <div>
            <img src={ props.url } className="w-100 img-thumbnail" alt="" />
        </div>
    )
}

ImagePreview.propTypes = {
    url: PropTypes.string
}

export default ImagePreview
