import React from 'react'
import Modal from 'react-bootstrap4-modal';
import PropTypes from 'prop-types';
import axios from 'axios'

import { ImagePreview, ImageGallery } from './../../index'


class FormImageSelect extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            isOpen: false,
            tempImageSelect: null,
            imagePreview: null
        }
    }

    fetchPreviewImage()
    {
        axios.get('image/id/' + this.state.imageId).then((result)=> {
            this.setState({
                imagePreview: result.data.url
            })
        }).catch((error)=> {
            console.log(error)
        })
    }

    createImagePreview()
    {
        if(this.state.imagePreview !== null)
        {
            return (
                <div className="form-group">
                    <div className="row col-md-6">
                        <ImagePreview url={ this.state.imagePreview } />
                    </div>
                </div>
            )
        }
        return null
    }

    handleImageSelect(id)
    {
        this.setState({
            tempImageSelect: id
        })
    }

    handleSave()
    {
        let imagePreview = this.state.tempImageSelect
        this.setState({
            imagePreview: imagePreview
        })
        this.toggleModal()
        this.props.onInputChange({ target: { name: this.props.name, value: this.state.tempImageSelect }})
    }

    toggleModal()
    {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render()
    {
        return (
            <div>
                <div className="form-group">
                    <button className="btn btn-primary" onClick={ ()=> this.toggleModal() }>
                        Select image
                    </button>
                </div>

                { this.createImagePreview() }

                <Modal visible={ this.state.isOpen }
                       dialogClassName="modal-dialog-centered modal-lg"
                       onClickBackdrop={ ()=> this.toggleModal() }>
                    <div className="modal-header">
                        <h5 className="modal-title">Select an image</h5>
                    </div>
                    <div className="modal-body">
                        <ImageGallery onSelectImage={ (image)=> this.handleImageSelect(image) } />
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={ ()=> this.toggleModal() }>
                            Cancel
                        </button>
                        <button type="button" className="btn btn-primary" onClick={ ()=> this.handleSave() }>
                            Save
                        </button>
                    </div>
                </Modal>
            </div>
        )
    }
}

FormImageSelect.propTypes = {
    onInputChange: PropTypes.func.isRequired,
    defaultImage:  PropTypes.object,
}

export default FormImageSelect
