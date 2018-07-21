import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import ReactLoading from 'react-loading';

import { TitleMain, FormInput, Alert } from './../../Components'
import * as actions from './../../store/actions'

class LoginPage extends React.Component
{
    constructor()
    {
        super()
        this.state = {
            email: '',
            password: ''
        }

        // this.handleInputChange = this.handleInputChange.bind(this)
    }

    formSchema()
    {
        return [
            {
                label: 'Email',
                value: this.state.email,
                name: 'email',
                type: 'email'
            },
            {
                label: 'Password',
                value: this.state.password,
                name: 'password',
                type: 'password'
            }
        ]
    }

    isAuth()
    {
        return (this.props.token) ? true : false
    }

    handleInputChange(event)
    {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleFormSubmit()
    {
        this.props.onLogin(this.state.email, this.state.password)
    }

    displayErrorBanner()
    {
        return (this.props.error === null) ? false : true
    }

    createFormInputs()
    {
        return this.formSchema().map((input, index)=> {
            return (
                <FormInput key={ `form_input_${index}` }
                           label={ input.label }
                           value={ input.value }
                           name={ input.name }
                           type={ input.type }
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
                <TitleMain>Login Page</TitleMain>
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <Alert type='danger' display={ this.displayErrorBanner() }>
                            You have the wrong credentials
                        </Alert>

                        <div className="card shadow">
                            <div className="card-body">
                                { this.createFormInputs() }

                                <div className="form-group">
                                    <button type="submit"
                                            className="btn btn-primary"
                                            onClick={ ()=> this.handleFormSubmit() }>Submit</button>
                                </div>
                            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)
