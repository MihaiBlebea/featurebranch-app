import React from 'react'
import random from 'randomstring'
import axios from 'axios'

import { FormElement, FormButton, Alert } from './../../Components'
import { withErrorValidation } from './../../HOC'


class ContactForm extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            form: {
                subject: {
                    elementType: 'input',
                    label: 'Subject',
                    type: 'text',
                    placeholder: 'Your subject',
                    name: 'subject',
                    value: ''
                },
                email: {
                    elementType: 'input',
                    label: 'Enter your email',
                    type: 'email',
                    placeholder: 'Your email',
                    name: 'email',
                    value: ''
                },
                content: {
                    elementType: 'textarea',
                    label: 'Enter your message',
                    type: 'text',
                    placeholder: 'Your message',
                    name: 'content',
                    value: ''
                },
            },
            errors: {
                subject: null,
                email: null,
                content: null
            },
            success: false
        }
        this.initialState = this.state
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
            subject: this.state.form.subject.value,
            email:   this.state.form.email.value,
            content: this.state.form.content.value,
        }
        axios.post('form/save', payload).then((result)=> {
            if(result.status === 200)
            {
                this.handleClearForm()
                this.setState({ success: true })
            }
        }).catch((error)=> {
            if(error.response.status === 400)
            {
                this.setState({
                    errors: {
                        subject: this.props.validateError(error.response.data.errors.subject),
                        email:   this.props.validateError(error.response.data.errors.email),
                        content: this.props.validateError(error.response.data.errors.content),
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

    displayErrorBanner()
    {
        let errors = Object.values(this.state.errors)
        for(let i = 0; i < errors.length; i++)
        {
            if(errors[i] !== null)
            {
                return true
            }
        }
        return false
    }

    render()
    {
        return (
            <div>
                <Alert type='danger' display={ this.displayErrorBanner() }>
                    Form could not be sent
                </Alert>

                <Alert type='success' display={ this.state.success }>
                    Form was sent successfully
                </Alert>

                { this.createFormInputs() }
                <FormButton submit={ ()=> this.handleFormSubmit() } button="Send" />
            </div>
        )
    }
}

export default withErrorValidation(ContactForm)
