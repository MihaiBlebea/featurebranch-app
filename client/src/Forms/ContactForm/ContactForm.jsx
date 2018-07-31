import React from 'react'
import random from 'randomstring'

import axios from 'axios'
import { Alert } from './../../Components'
import { schema } from './schema'
import { withErrorValidation } from './../../HOC'

class ContactForm extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            subject: '',
            email: '',
            content: '',

            errors: {
                subject: null,
                email: null,
                content: null
            },
            success: false
        }
        this.schema = ()=> schema(this.state)
    }

    handleInputChange(event)
    {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleFormSubmit()
    {
        let payload = {
            subject: this.state.subject,
            email:   this.state.email,
            content: this.state.content,
        }
        axios.post('form/save', payload).then((result)=> {
            if(result.status === 200)
            {
                this.setState({
                    subject: '',
                    email: '',
                    content: '',
                    errors: {
                        subject: null,
                        email: null,
                        content: null
                    },
                    success: true
                })
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
        return this.schema().map((input, index)=> {
            let Component = input.component
            return (
                <Component key={ random.generate(6) }
                           label={ input.label }
                           value={ input.value }
                           type= { input.type || null }
                           name={ input.name }
                           error={ input.error }
                           onInputChange={ (event)=> this.handleInputChange(event) } />
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

                <div className="form-group">
                    <button type="submit"
                            className="btn btn-primary"
                            onClick={ ()=> this.handleFormSubmit() }>Submit</button>
                </div>
            </div>
        )
    }
}

export default withErrorValidation(ContactForm)
