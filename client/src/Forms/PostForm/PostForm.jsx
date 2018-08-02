import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import axios from 'axios'

import { FormElement, FormButton } from './../../Components'
import { withErrorValidation } from './../../HOC'


class PostForm extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            form: {
                title: {
                    elementType: 'input',
                    label: 'Post title',
                    type: 'text',
                    placeholder: 'Choose a post title',
                    name: 'title',
                    value: ''
                },
                slug: {
                    elementType: 'input',
                    label: 'Post slug',
                    type: 'text',
                    placeholder: 'Choose a post slug for SEO',
                    name: 'slug',
                    value: ''
                },
                content: {
                    elementType: 'markdown',
                    label: 'Post content',
                    type: 'text',
                    placeholder: 'Write a story',
                    name: 'content',
                    value: ''
                },
                image: {
                    elementType: 'image',
                    label: 'Select a main image',
                    name: 'image',
                    value: ''
                },
                author: {
                    elementType: 'select',
                    label: 'Author of the post',
                    options: [],
                    name: 'author',
                    value: 'default'
                },
                category: {
                    elementType: 'select',
                    label: 'Post is in category',
                    options: [],
                    name: 'category',
                    value: 'default'
                },
                isPublished: {
                    elementType: 'select',
                    label: 'Is the post going to be published',
                    options: [
                        { value: true, label: 'Published'},
                        { value: false, label: 'Draft'}
                    ],
                    name: 'isPublished',
                    value: ''
                },
                publishDate: {
                    elementType: 'input',
                    label: 'Publish date',
                    type: 'text',
                    name: 'publishDate',
                    value: ''
                }
            },

            errors: {
                title: null,
                slug: null,
                content: null,
                author: null,
                category: null,
                isPublished: null,
            }
        }
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
        const updatedForm = { ...this.state.form }
        const updatedElement = { ...updatedForm[event.target.name] }
        updatedElement.value = event.target.value
        updatedForm[event.target.name] = updatedElement
        this.setState({
            form: updatedForm
        })
    }

    addOptionsToState(key, options)
    {
        const updatedForm = { ...this.state.form }
        const updatedElement = { ...updatedForm[key] }
        updatedElement.options = options
        updatedForm[key] = updatedElement
        this.setState({
            form: updatedForm
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
            title:        this.state.form.title.value,
            slug:         this.state.form.slug.value,
            content:      this.state.form.content.value,
            main_image:   this.state.form.image.value,
            author:       this.state.form.author.value,
            category:     this.state.form.category.value,
            is_published: this.state.form.isPublished.value
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
                        title:       this.validateError(error.response.data.errors.title),
                        slug:        this.validateError(error.response.data.errors.slug),
                        content:     this.validateError(error.response.data.errors.content),
                        author:      this.validateError(error.response.data.errors.author),
                        category:    this.validateError(error.response.data.errors.category),
                        isPublished: this.validateError(error.response.data.errors.is_published)
                    }
                })
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
                this.addOptionsToState('author', authors)
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
                this.addOptionsToState('category', categories)
            }
        }).catch((error)=> {
            console.log(error)
        })
    }

    createFormInputs()
    {
        let formArray = []
        for(let key in this.state.form)
        {
            formArray.push({
                ...this.state.form[key],
                id: key
            })
        }
        return formArray.map((input, index)=> {
            return (
                <FormElement key={ 'input_' + index }
                             { ...input }
                             error={ this.state.errors[input.id] }
                             onInputChange={ (event)=> this.handleInputChange(event) }/>
            )
        })
    }

    render()
    {
        return (
            <div>
                { this.createFormInputs() }
                <FormButton submit={ ()=> this.handleFormSubmit() } button="Save" />
            </div>
        )
    }
}

PostForm.propTypes = {
    editPost: PropTypes.string
}


export default withErrorValidation(withRouter(PostForm))
