import React from 'react'
import Modal from 'react-bootstrap4-modal';
import PropTypes from 'prop-types';

import { ModalGallery, ImagePreview, ImageGallery } from './../index'


class FormImageSelect extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            isOpen: false
        }
    }

    createImagePreview()
    {
        if(this.props.imageUrl)
        {
            return (
                <div className="form-group">
                    <div className="row col-md-6">
                        <ImagePreview url={ this.props.imageUrl } />
                    </div>
                </div>
            )
        }
    }

    handleImageSelect(image)
    {
        console.log(image)
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

                <Modal visible={ this.state.isOpen } onClickBackdrop={ ()=> this.toggleModal() }>
                    <div className="modal-header">
                        <h5 className="modal-title">Red Alert!</h5>
                    </div>
                    <div className="modal-body">
                        <ImageGallery onSelectImage={ (image)=> this.handleImageSelect(image) } />
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={ ()=> this.toggleModal() }>
                            Cancel
                        </button>
                        <button type="button" className="btn btn-primary" onClick={ '' }>
                            Save
                        </button>
                    </div>
                </Modal>
            </div>
        )
    }
}

export default FormImageSelect
