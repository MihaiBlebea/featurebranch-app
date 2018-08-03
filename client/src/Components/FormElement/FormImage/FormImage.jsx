import React from 'react'
import PropTypes from 'prop-types';
import axios from 'axios'

import {
    ImagePreview,
    ImageGallery,
    ButtonDefault,
    ModalDefault } from './../../index'


class FormImageSelect extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            isOpen: false,
            selectedImgId: null,
            imagePreviewUrl: null
        }
    }

    componentDidUpdate()
    {
        // this.fetchPreviewImage(this.props.value)
    }

    createImagePreview()
    {
        if(this.state.imagePreviewUrl !== null)
        {
            return (
                <div className="form-group">
                    <div className="row col-md-6">
                        <ImagePreview url={ this.state.imagePreviewUrl } />
                    </div>
                </div>
            )
        }
        return null
    }

    handleImageSelect(id)
    {
        this.setState({
            selectedImgId: id
        })
    }

    handleSave()
    {
        this.toggleModal()
        this.fetchPreviewImage(this.state.selectedImgId)
        this.props.onInputChange({ target: { name: this.props.name, value: this.state.selectedImgId }})
    }

    toggleModal()
    {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    createGalleryModal()
    {
        if(this.state.isOpen)
        {
            return (
                <ModalDefault close={ ()=> this.toggleModal() }>
                    <ImageGallery onSelectImage={ (image)=> this.handleImageSelect(image) } />

                    <ButtonDefault click={ ()=> this.toggleModal() }>
                        Cancel
                    </ButtonDefault>
                    <ButtonDefault click={ ()=> this.handleSave() }>
                        Save
                    </ButtonDefault>

                </ModalDefault>
            )
        }
        return null
    }

    render()
    {
        return (
            <div>
                <ButtonDefault click={ ()=> this.toggleModal() }>
                    Select image
                </ButtonDefault>
                { this.createImagePreview() }
                { this.createGalleryModal() }
            </div>
        )
    }
}

FormImageSelect.propTypes = {
    onInputChange: PropTypes.func.isRequired
}

export default FormImageSelect
