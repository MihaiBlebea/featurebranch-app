import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import random from 'randomstring'

import { schema } from './schema'
import axios from 'axios'
import { FormImageSelect, FormMarkdown } from './../../Components'
import { withErrorValidation } from './../../HOC'


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
            categories: null,

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
        this.validateError = this.props.validateError
    }

    componentDidMount()
    {
        this.fetchAuthors()
        this.fetchCategories()
        if(this.props.editPost !== undefined)
        {
            this.handleEditPost(this.props.editPost)
        }
    }

    handleEditPost(id)
    {
        axios.get('post/id/' + id).then((result)=> {
            console.log(result.data)
            this.setState({
                title:       result.data.title,
                slug:        result.data.slug,
                content:     result.data.content,
                author:      result.data.author._id,
                image:       result.data.main_image,
                category:    result.data.category,
                isPublished: result.data.is_published,
                publishDate: null,
            })
        }).catch((error)=> {
            console.log(error)
        })
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
        let url = (this.props.editPost === undefined) ? 'post/save' : 'post/update/' + this.props.editPost
        let payload = {
            title:        this.state.title,
            slug:         this.state.slug,
            content:      this.state.content,
            main_image:   (this.state.image) ? this.state.image._id : null,
            author:       this.state.author,
            category:     this.state.category,
            is_published: this.state.isPublished
        }
        axios.post(url, payload).then((result)=> {
            if(result.status === 200)
            {
                this.handleRedirect()
            }
        }).catch((error)=> {
            if(error.response.status === 400)
            {
                this.setState({
                    errors: {
                        title: this.validateError(error.response.data.errors.title),
                        slug: this.validateError(error.response.data.errors.slug),
                        content: this.validateError(error.response.data.errors.content),
                        author: this.validateError(error.response.data.errors.author),
                        category: this.validateError(error.response.data.errors.category),
                        isPublished: this.validateError(error.response.data.errors.is_published)
                    }
                })
                console.log(error.response)
            }
        })
    }

    fetchAuthors()
    {
        axios.get('user/all').then((result)=> {
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
        axios.get('category/all').then((result)=> {
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
                <Component key={ 'input_' + index }
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
                <FormImageSelect defaultImage={ this.state.image }
                                 onSelectImage={ (image)=> this.handleSelectImage(image) }/>

                { this.createFormInputs() }

                <div className="form-group">
                    <button type="submit"
                            className="btn btn-primary"
                            onClick={ ()=> this.handleFormSubmit() }>
                        { (this.props.editPost === undefined) ? 'Save' : 'Update' }
                    </button>
                </div>
            </div>
        )
    }
}

PostForm.propTypes = {
    editPost: PropTypes.string
}


export default withErrorValidation(withRouter(PostForm))
