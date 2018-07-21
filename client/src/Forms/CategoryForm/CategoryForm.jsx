import React from 'react'
import axios from 'axios'

import {
    FormInput,
    FormTextarea,
    ModalGallery,
    ImagePreview } from './../../Components'


class CategoryForm extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            title: '',
            slug: '',
            description: '',
            image: null
        }
    }

    handleInputChange(event)
    {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSelectImage(image)
    {
        this.setState({
            image: image
        })
    }

    handleClearForm()
    {
        this.setState({
            title: '',
            slug: '',
            description: '',
            image: null
        })
    }

    handleFormSubmit()
    {
        let payload = {
            title: this.state.title,
            slug: this.state.slug,
            description: this.state.description,
            main_image: this.state.image._id
        }
        let url = process.env.REACT_APP_API_ROOT + `category/save?auth_token=${this.props.token}`
        axios.post(url, payload).then((result)=> {
            this.handleClearForm()
            this.props.onNewCategory()
        }).catch((error)=> {
            console.log(error)
        })
    }

    createImagePreview()
    {
        if(this.state.image)
        {
            return (
                <div className="row col-md-6 form-group">
                    <ImagePreview url={ this.state.image.url } />
                </div>
            )
        }
    }

    render()
    {
        return (
            <div>
                <div className="form-group">
                    <button className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                        Select image
                    </button>
                </div>

                { this.createImagePreview() }

                <ModalGallery onSelectImage={ (image)=> this.handleSelectImage(image) } />

                <FormInput label="Choose a title"
                           name="title"
                           value={ this.state.title }
                           onInputChange={ (event)=> this.handleInputChange(event) } />

                <FormInput label="Pick a slug"
                           name="slug"
                           value={ this.state.slug }
                           onInputChange={ (event)=> this.handleInputChange(event) } />

                <FormTextarea label="Category description"
                              name="description"
                              value={ this.state.description }
                              onInputChange={ (event)=> this.handleInputChange(event) } />

                <div className="form-group">
                    <button type="submit"
                            className="btn btn-primary"
                            onClick={ ()=> this.handleFormSubmit() }>Submit</button>
                </div>
            </div>
        )
    }
}



export default CategoryForm
