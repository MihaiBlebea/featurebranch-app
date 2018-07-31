import React from 'react'
import axios from 'axios'

import { FormElement, FormButton } from './../../Components'
import { withErrorValidation } from './../../HOC'

class CategoryForm extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            form: {
                title: {
                    elementType: 'input',
                    label: 'Category title',
                    type: 'text',
                    placeholder: 'Choose a title',
                    name: 'title',
                    value: ''
                },
                slug: {
                    elementType: 'input',
                    label: 'Category slug',
                    type: 'text',
                    placeholder: 'Choose a slug',
                    name: 'slug',
                    value: ''
                },
                description: {
                    elementType: 'textarea',
                    label: 'Category description',
                    type: 'text',
                    placeholder: '',
                    name: 'description',
                    value: ''
                },
                image: {
                    elementType: 'image',
                    label: 'Category image',
                    type: 'text',
                    placeholder: 'Select an image',
                    name: 'image',
                    value: ''
                },
            },
            errors: {
                title: null,
                slug: null,
                description: null
            }
        }
        this.initialState = this.state;
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

    handleClearForm()
    {
        this.setState({
            ...this.initialState
        })
    }

    handleFormSubmit()
    {
        let payload = {
            title: this.state.form.title.value,
            slug: this.state.form.slug.value,
            description: this.state.form.description.value,
            main_image: this.state.form.image.value
        }
        axios.post('category/save', payload).then((result)=> {
            if(result.status === 200)
            {
                this.handleClearForm()
                this.props.onNewCategory()
            }
        }).catch((error)=> {
            if(error.response.status === 400)
            {
                this.setState({
                    errors: {
                        title:       this.props.validateError(error.response.data.errors.title),
                        slug:        this.props.validateError(error.response.data.errors.slug),
                        description: this.props.validateError(error.response.data.errors.description)
                    }
                })
            }
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



export default withErrorValidation(CategoryForm)
