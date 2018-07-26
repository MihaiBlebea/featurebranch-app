import React from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'

import { schema } from './schema'
import { FormImageSelect } from './../../Components'


class PostForm extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            title: '',
            slug: '',
            content: '',
            image: null,
            author: 'default',
            category: 'default',
            isPublished: 'default',
            publishDate: null,

            authors: null,
            publishOptions: [
                { value: true, label: 'Published'},
                { value: false, label: 'Draft'}
            ],
            errors: {
                title: null,
                slug: null,
                content: null,
                author: null,
                category: null,
                isPublished: null,
            }
        }

        this.schema = ()=> schema(this.state)
    }

    componentDidMount()
    {
        this.fetchAuthors()
        this.fetchCategories()
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

    handleRedirect()
    {
        this.props.history.push('/admin/posts')
    }

    handleFormSubmit()
    {
        let payload = {
            title:        this.state.title,
            slug:         this.state.slug,
            content:      this.state.content,
            main_image:   (this.state.image) ? this.state.image._id : null,
            author:       this.state.author,
            category:     this.state.category,
            is_published: this.state.isPublished
        }
        axios.post(process.env.REACT_APP_API_ROOT + `post/save`, payload).then((result)=> {
            if(result.status === 200)
            {
                this.handleRedirect()
            }
        }).catch((error)=> {
            if(error.response.status === 400)
            {
                this.setState({
                    errors: {
                        title: error.response.data.errors.title.message,
                        slug: error.response.data.errors.slug.message,
                        content: error.response.data.errors.content.message,
                        author: error.response.data.errors.author.message,
                        category: error.response.data.errors.category.message,
                        isPublished: error.response.data.errors.is_published.message
                    }
                })
                console.log(error.response)
            }
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

    fetchCategories()
    {
        axios.get(process.env.REACT_APP_API_ROOT + `category/all`).then((result)=> {
            if(result.status === 200)
            {
                let categories = result.data.map((category)=> {
                    return { value: category._id, label: category.title }
                })
                this.setState({
                    categories: categories
                })
            }
        }).catch((error)=> {
            console.log(error)
        })
    }

    createFormInputs()
    {
        return this.schema().map((input, index)=> {
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


export default withRouter(PostForm)
