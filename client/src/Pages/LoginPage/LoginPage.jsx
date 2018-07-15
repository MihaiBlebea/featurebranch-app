import React from 'react'
import axios from 'axios'
import { MainTitle, FormInput, Alert } from './../../Components'


class LoginPage extends React.Component
{
    constructor()
    {
        super()
        this.state = {
            email: '',
            password: '',
            errors: false
        }

        this.handleInputChange = this.handleInputChange.bind(this)
    }

    handleInputChange(event)
    {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleFormSubmit()
    {
        let payload = {
            email: this.state.email,
            password: this.state.password
        }
        axios.post(process.env.REACT_APP_API_ROOT + 'user/login', payload).then((result)=> {
            if(this.state.errors === true)
            {
                this.setState({ errors: false })
            }
            localStorage.setItem('auth_token', result.headers['x-auth'])
            this.props.history.push('/dashboard')
        }).catch((error)=> {
            this.setState({ errors: true })
            console.log(error)
        })
    }

    render()
    {
        return (
            <div>
                <MainTitle>Login Page</MainTitle>
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <Alert type='danger' display={ this.state.errors }>You have the wrong credentials</Alert>

                        <div className="card shadow">
                            <div className="card-body">
                                <FormInput label='Email'
                                           value={ this.state.email }
                                           name='email'
                                           type='email'
                                           onInputChange={ (event)=> this.handleInputChange(event) } />

                                <FormInput label={'Password'}
                                           value={ this.state.password }
                                           name={'password'}
                                           type='password'
                                           onInputChange={ (event)=> this.handleInputChange(event) } />

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
}

export default LoginPage