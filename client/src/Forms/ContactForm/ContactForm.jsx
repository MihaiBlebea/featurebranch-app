import React from 'react'
import axios from 'axios'

import { Alert } from './../../Components'
import { schema } from './schema'


class ContactForm extends React.Component
{
    constructor()
    {
        super()
        this.state = {
            subject: '',
            email: '',
            content: '',

            errors: {
                subject: null,
                email: null,
                content: null
            }
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
        axios.post(process.env.REACT_APP_API_ROOT + 'form/save', payload).then((result)=> {
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
                    }
                })
            }
        }).catch((error)=> {
            if(error.response.status === 400)
            {
                this.setState({
                    errors: {
                        subject: (error.response.data.errors.subject) ? error.response.data.errors.subject.message : null,
                        email:   (error.response.data.errors.email) ? error.response.data.errors.email.message : null,
                        content: (error.response.data.errors.content) ? error.response.data.errors.content.message : null,
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
                <Component key={ `form_input_${index}` }
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

export default ContactForm
