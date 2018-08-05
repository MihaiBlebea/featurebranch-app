import React from 'react'
import { FormButton, FormElement } from './../../Components'


class LeadForm extends React.Component
{
    constructor()
    {
        super()
        this.state = {
            form: {
                fullName: {
                    elementType: 'input',
                    label: 'Your name',
                    type: 'text',
                    placeholder: 'Enter your fullname',
                    name: 'fullName',
                    value: ''
                },
                email: {
                    elementType: 'input',
                    label: 'Enter your email',
                    type: 'email',
                    placeholder: 'Enter your valid email',
                    name: 'email',
                    value: ''
                },
            },

            errors: {
                name: null,
                email: null
            }
        }
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
            fullName: this.state.form.fullName.value,
            email:    this.state.form.email.value
        }
        alert('Lead sent: ' + this.state.form.fullName.value + ' ' + this.state.form.email.value)
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
                { this.createFormInputs() }
                <FormButton submit={ ()=> this.handleFormSubmit() } button="Send" />
            </div>
        )
    }
}

export default LeadForm
