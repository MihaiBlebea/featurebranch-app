import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import ReactLoading from 'react-loading';

import { FormElement, Alert, FormButton } from './../../Components'
import * as actions from './../../store/actions'


class LoginForm extends React.Component
{
    constructor()
    {
        super()
        this.state = {
            form: {
                email: {
                    elementType: 'input',
                    label: 'Email',
                    type: 'text',
                    placeholder: '',
                    name: 'email',
                    value: ''
                },
                password: {
                    elementType: 'input',
                    label: 'Password',
                    type: 'password',
                    placeholder: '',
                    name: 'password',
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

    handleFormSubmit()
    {
        this.props.onLogin(this.state.form.email.value, this.state.form.password.value)
    }

    displayErrorBanner()
    {
        return (this.props.error === null) ? false : true
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
                    You have the wrong credentials
                </Alert>

                { this.createFormInputs() }
                <FormButton submit={ ()=> this.handleFormSubmit() }>
                    Login
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
        error: state.login.error,
        token: state.auth.token,
        isLoading: state.isLoading
    }
}

const mapDispatchToProps = (dispatch)=> {
    return {
        onLogin: (email, password)=> dispatch(actions.login(email, password))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
