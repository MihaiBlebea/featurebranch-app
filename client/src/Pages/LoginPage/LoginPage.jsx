import React from 'react'
import { connect } from 'react-redux'
import { MainTitle, FormInput, Alert } from './../../Components'
import { Redirect } from 'react-router-dom'
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

        this.handleInputChange = this.handleInputChange.bind(this)
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

    handleInputChange(event)
    {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleFormSubmit()
    {
        this.props.onUserLogin(this.state.email, this.state.password)
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

    createForm()
    {
        return (
            <div>
                <MainTitle>Login Page</MainTitle>
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <Alert type='danger' display={ this.props.error }>You have the wrong credentials</Alert>

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
        return (this.props.token !== null) ? ( <Redirect to='/dashboard' /> ) : ( this.createForm() )
    }
}

const mapStateToProps = (state)=> {
    return {
        error: state.auth.error,
        token: state.auth.token
    }
}

const mapDispatchToProps = (dispatch)=> {
    return {
        onUserLogin: (email, password)=> dispatch(actions.userLogin(email, password))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)
