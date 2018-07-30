import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import ReactLoading from 'react-loading'

import { schema } from './schema'
import * as actions from './../../store/actions'
import { FormInput, Alert } from './../../Components'


class RegisterForm extends React.Component
{
    constructor()
    {
        super()
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            password: '',
            passwordAgain: ''
        }

        this.schema = ()=> schema(this.state, this.props)
        this.handleInputChange = this.handleInputChange.bind(this)
    }

    isAuth()
    {
        return (this.props.token) ? true : false
    }

    handleInputChange(event)
    {
        let name = event.target.name
        this.setState({ [name]: event.target.value })
    }

    passwordConfirmationMatch()
    {
        return (this.state.password === this.state.passwordAgain) ? null : 'Passwords do not match';
    }

    handleFormSubmit()
    {
        this.props.onRegister(this.state.firstName,
                              this.state.lastName,
                              this.state.email,
                              this.state.phone,
                              this.state.password)
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
        return this.schema().map((input, index)=> {
            return (
                <FormInput key={ 'input_' + index }
                           label={ input.label }
                           value={ input.value }
                           name={ input.name }
                           type={ input.type }
                           error={ (input.name === 'passwordAgain') ? this.passwordConfirmationMatch() : input.error }
                           onInputChange={ (event)=> this.handleInputChange(event) } />
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

                <div className="card shadow">
                    <div className="card-body">

                        { this.createFormInputs() }

                        <div className="form-group">
                            <button type="submit"
                                    disabled={ (this.passwordConfirmationMatch() !== null) ? true : false }
                                    className="btn btn-primary"
                                    onClick={ ()=> this.handleFormSubmit() }>Submit</button>
                        </div>
                    </div>
                </div>
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
