import React from 'react'
import axios from 'axios'

import { FormInput, FormTextarea, ModalGallery } from './../../Components'


class CategoryForm extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            title: '',
            slug: '',
            description: ''
        }
    }

    handleInputChange(event)
    {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleFormSubmit()
    {
        let payload = {
            title: this.state.title,
            slug: this.state.slug,
            description: this.state.description
        }
        let url = process.env.REACT_APP_API_ROOT + `category/save?auth_token=${this.props.token}`
        axios.post(url, payload).then((result)=> {
            console.log(result)
        }).catch((error)=> {
            console.log(error)
        })
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

                <ModalGallery />

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
