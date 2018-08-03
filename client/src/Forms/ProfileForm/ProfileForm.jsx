import React from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

import { FormElement, FormButton } from './../../Components'


class ProfileForm extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            form: {
                image: {
                    elementType: 'image',
                    label: 'Select profile picture',
                    name: 'image',
                    value: ''
                },
                firstName: {
                    elementType: 'input',
                    label: 'First name',
                    type: 'text',
                    placeholder: 'Your first name',
                    name: 'firstName',
                    value: ''
                },
                lastName: {
                    elementType: 'input',
                    label: 'Last name',
                    type: 'text',
                    placeholder: 'Your last name',
                    name: 'lastName',
                    value: ''
                },
                email: {
                    elementType: 'input',
                    label: 'Your email',
                    type: 'email',
                    placeholder: 'Your email address',
                    name: 'email',
                    value: ''
                },
                phone: {
                    elementType: 'input',
                    label: 'Phone number',
                    type: 'text',
                    placeholder: 'Your phone',
                    name: 'phone',
                    value: ''
                },
                description: {
                    elementType: 'textarea',
                    label: 'Write a short description',
                    type: 'text',
                    placeholder: 'Your description',
                    name: 'description',
                    value: ''
                },
                password: {
                    elementType: 'input',
                    label: 'New password',
                    type: 'password',
                    placeholder: 'Choose a new password',
                    name: 'password',
                    value: ''
                },
                passwordAgain: {
                    elementType: 'input',
                    label: 'Repeat the new password',
                    type: 'password',
                    placeholder: 'Repeat your password',
                    name: 'passwordAgain',
                    value: ''
                }
            },

            errors: {
                firstName: null,
                lastName: null,
                email: null,
                phone: null,
                description: null,
                password: null,
            }
        }
    }

    componentDidMount()
    {
        this.fetchUser()
    }

    fetchUser()
    {
        axios.get('user').then((result)=> {
            if(result.status === 200)
            {
                this.setState({
                    image:       result.data.image || null,
                    firstName:   result.data.first_name,
                    lastName:    result.data.last_name,
                    email:       result.data.email,
                    phone:       result.data.phone || '',
                    description: result.data.description || ''
                })
            }
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

    handleFormSubmit()
    {
        //
    }

    handleSelectImage()
    {
        //
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

    passwordConfirmationMatch()
    {
        return (this.state.password === this.state.passwordAgain) ? null : 'Passwords do not match';
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

                <FormButton submit={ ()=> this.handleFormSubmit() }
                            disabled={ (this.passwordConfirmationMatch() !== null) ? true : false }>
                    Update
                </FormButton>
            </div>
        )
    }
}

export default ProfileForm
