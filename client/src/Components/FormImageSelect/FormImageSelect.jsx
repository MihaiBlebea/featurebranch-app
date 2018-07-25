import React from 'react'
import { ModalGallery, ImagePreview } from './../index'


const FormImageSelect = (props)=> {

    const createImagePreview = ()=> {
        if(props.imageUrl)
        {
            return (
                <div className="form-group">
                    <div className="row col-md-6">
                        <ImagePreview url={ props.imageUrl } />
                    </div>
                </div>
            )
        }
    }

    return (
        <div>
            <div className="form-group">
                <button className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                    Select image
                </button>
            </div>

            { createImagePreview() }
            <ModalGallery onSelectImage={ props.onSelectImage } />
        </div>
    )
}

export default FormImageSelect
