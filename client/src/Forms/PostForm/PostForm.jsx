import React from 'react'
import axios from 'axios'

import {
    FormInput,
    FormSelect,
    FormTextarea,
    FormImageSelect } from './../../Components'


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
            author: 'default',
            isPublished: 'default',
            publishDate: null,

            authors: null,
            publishOptions: [
                { value: true, label: 'Published'},
                { value: false, label: 'Draft'}
            ],
            errors: {
                title: null,
                slug: null
            }
        }
    }

    formSchema()
    {
        return [
            {
                label: 'Choose a title',
                value: this.state.title,
                name: 'title',
                type: 'text',
                component: FormInput,
                error: this.state.errors.title
            },
            {
                label: 'Pick a slug',
                value: this.state.slug,
                name: 'slug',
                type: 'text',
                component: FormInput,
                error: this.state.errors.slug
            },
            {
                label: 'Select author',
                value: this.state.author,
                name: 'author',
                options: this.state.authors || null,
                component: FormSelect,
                error: this.state.errors.author
            },
            {
                label: 'Is published',
                value: this.state.isPublished,
                name: 'isPublished',
                options: this.state.publishOptions || null,
                component: FormSelect,
                error: this.state.errors.publish
            },
            {
                label: 'Post content',
                value: this.state.content,
                name: 'content',
                component: FormTextarea,
                error: this.state.errors.content
            },
        ]
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

    handleFormSubmit()
    {
        let payload = {
            title:        this.state.title,
            slug:         this.state.slug,
            content:      this.state.content,
            main_image:   this.state.image._id,
            author:       this.state.author,
            is_published: this.state.isPublished
        }
        axios.post(process.env.REACT_APP_API_ROOT + `post/save`, payload).then((result)=> {
            console.log(result)
        }).catch((error)=> {
            console.log(error)
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

    createFormInputs()
    {
        return this.formSchema().map((input, index)=> {
            let Component = input.component
            return (
                <Component key={ `form_input_${index}` }
                           label={ input.label }
                           value={ input.value }
                           name={ input.name }
                           type={ input.type }
                           options={ input.options || null}
                           error={ input.error }
                           onInputChange={ (event)=> this.handleInputChange(event) } />
            )
        })
    }

    render()
    {
        return (
            <div>
                <FormImageSelect imageUrl={ this.state.image ? this.state.image.url : null }
                                 onSelectImage={ (image)=> this.handleSelectImage(image) }/>

                { this.createFormInputs() }

                <div className="form-group">
                    <button type="submit"
                            className="btn btn-primary"
                            onClick={ ()=> this.handleFormSubmit() }>Submit</button>
                </div>
            </div>
        )
    }
}


export default PostForm
