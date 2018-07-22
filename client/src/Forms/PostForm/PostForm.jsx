import React from 'react'
import axios from 'axios'

import {
    FormInput,
    FormSelect,
    ModalGallery,
    ImagePreview } from './../../Components'

class PostForm extends React.Component
{
    constructor()
    {
        super()
        this.state = {
            title: '',
            slug: '',
            content: '',
            image: null,
            author: '',
            is_published: null,
            publish_date: null,

            authors: null,
            errors: {
                title: null,
                slug: null
            }
        }
    }

    componentDidMount()
    {
        this.fetchAuthors()
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

    fetchAuthors()
    {
        axios.get(process.env.REACT_APP_API_ROOT + `user/all`).then((result)=> {
            if(result.status === 200)
            {
                let authors = result.data.map((author)=> {
                    return { value: author._id, label: author.first_name + ' ' + author.last_name }
                })
                this.setState({
                    authors: authors
                })
            }
        }).catch((error)=> {
            console.log(error)
        })
    }

    createImagePreview()
    {
        if(this.state.image)
        {
            return (
                <div className="form-group">
                    <ImagePreview url={ this.state.image.url } />
                </div>
            )
        }
    }

    render()
    {
        return (
            <div>
                <FormInput label="Choose a title"
                           name="title"
                           value={ this.state.title }
                           error={ this.state.errors.title }
                           onInputChange={ (event)=> this.handleInputChange(event) } />

                <FormInput label="Slug"
                           name="slug"
                           value={ this.state.slug }
                           error={ this.state.errors.slug }
                           onInputChange={ (event)=> this.handleInputChange(event) } />

                <FormSelect label="Author"
                            name="author"
                            value={ this.state.author }
                            options={ this.state.authors }
                            onInputChange={ (event)=> this.handleInputChange(event) } />

                <div className="form-group">
                    <button className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                        Select image
                    </button>
                </div>

                { this.createImagePreview() }
                <ModalGallery onSelectImage={ (image)=> this.handleSelectImage(image) } />
            </div>
        )
    }
}

export default PostForm
