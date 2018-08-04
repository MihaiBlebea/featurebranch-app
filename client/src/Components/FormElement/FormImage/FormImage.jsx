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
            selectedImg: null,
        }
    }

    createImagePreview()
    {
        if(this.state.selectedImg !== null)
        {
            return (
                <div className="mt-5 max-w-sm">
                    <ImagePreview url={ this.state.selectedImg.url } />
                </div>
            )
        }
        return null
    }

    handleImageSelect(image)
    {
        this.setState({
            selectedImg: image
        }, ()=> this.handleSave())
    }

    handleSave()
    {
        this.toggleModal()
        this.props.onInputChange({ target: { name: this.props.name, value: this.state.selectedImg._id }})
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
                    <ImageGallery select={ (image)=> this.handleImageSelect(image) } />

                    <div className="inline-flex justify-center mt-6 -mx-2">
                        <div className="px-2">
                            <ButtonDefault click={ ()=> this.toggleModal() }>
                                Cancel
                            </ButtonDefault>
                        </div>
                    </div>

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
