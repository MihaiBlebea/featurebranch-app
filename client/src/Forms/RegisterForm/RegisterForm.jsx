import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import ReactLoading from 'react-loading'

import * as actions from './../../store/actions'
import { FormElement, Alert, FormButton } from './../../Components'


class RegisterForm extends React.Component
{
    constructor()
    {
        super()
        this.state = {
            form: {
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
            }
        }
    }

    isAuth()
    {
        return (this.props.token) ? true : false
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

    passwordConfirmationMatch()
    {
        if(this.state.form.password.value !== this.state.form.passwordAgain.value)
        {
            return 'Passwords do not match'
        }
        return null
    }

    handleFormSubmit()
    {
        this.props.onRegister(this.state.form.firstName.value,
                              this.state.form.lastName.value,
                              this.state.form.email.value,
                              this.state.form.phone.value,
                              this.state.form.password.value)
    }

    displayErrorBanner()
    {
        let errors = Object.values(this.props.errors)
        for(let i = 0; i < errors.length; i++)
        {
            if(errors[i] !== null)
            {
                return true
            }
        }
        return false
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
                             error={ (input.id === 'passwordAgain') ? this.passwordConfirmationMatch() : this.props.errors[input.id]}
                             onInputChange={ (event)=> this.handleInputChange(event) }/>
            )
        })
    }

    createLoadingSpinner()
    {
        return (
            <div className="row col justify-content-center">
                <ReactLoading type="balls" color="blue" height={150} width={100} />
            </div>
        )
    }

    createForm()
    {
        return (
            <div>
                <Alert type='danger' display={ this.displayErrorBanner() }>
                    Please fill all the required fields
                </Alert>

                { this.createFormInputs() }

                <FormButton submit={ ()=> this.handleFormSubmit() }
                            disabled={ (this.passwordConfirmationMatch() !== null) ? true : false }>
                    Register
                </FormButton>
            </div>
        )
    }

    render()
    {
        if(this.isAuth() === true)
        {
            return ( <Redirect to='/dashboard' /> )
        }

        return (this.props.isLoading === true) ? this.createLoadingSpinner() : this.createForm()
    }
}

const mapStateToProps = (state)=> {
    return {
        errors: state.register.errors,
        token: state.auth.token
    }
}

const mapDispatchToProps = (dispatch)=> {
    return {
        onRegister: (firstName, lastName, email, phone, password)=> {
            dispatch(actions.register(firstName, lastName, email, phone, password))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm)
