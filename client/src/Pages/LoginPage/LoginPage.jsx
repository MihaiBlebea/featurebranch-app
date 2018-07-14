import React from 'react'
import axios from 'axios'
import { MainTitle, FormInput } from './../../Components'


class LoginPage extends React.Component
{
    constructor()
    {
        super()
        this.state = {
            email: '',
            password: '',
            errors: {
                email: null,
                password: null
            }
        }

        this.handleInputChange = this.handleInputChange.bind(this)
    }

    handleInputChange(event)
    {
        let name = event.target.name
        this.setState({ [name]: event.target.value }, ()=> {
            if(name === 'passwordAgain' || name === 'password')
            {
                let errors = { ...this.state.errors }
                errors.passwordAgain = (this.state.password === this.state.passwordAgain) ? null : 'Passwords do not match';
                this.setState({ errors })
            }
        })
    }

    handleFormSubmit()
    {
        let payload = {
            email: this.state.email,
            password: this.state.password
        }
        axios.post(process.env.REACT_APP_API_ROOT + 'user/login', payload).then((result)=> {
            console.log(result)
        }).catch((error)=> {
            console.log(error)
        })
    }

    createErrorMessage(name)
    {
        if(this.state.errors[name] !== null)
        {
            return (
                <div className="invalid-feedback">{ this.state.errors[name] }</div>
            )
        }
    }

    render()
    {
        return (
            <div>
                <MainTitle>Login Page</MainTitle>
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card shadow-sm">
                            <div className="card-body">
                                <FormInput label='Email'
                                           value={ this.state.email }
                                           name='email'
                                           type='email'
                                           error={ this.state.errors.email }
                                           onInputChange={ (event)=> this.handleInputChange(event) } />

                                <FormInput label={'Password'}
                                           value={ this.state.password }
                                           name={'password'}
                                           type='password'
                                           error={ this.state.errors.password }
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
