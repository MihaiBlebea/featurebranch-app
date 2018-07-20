import React from 'react'
import axios from 'axios'
import { MainTitle, FormInput, Alert } from './../../Components'

class RegisterPage extends React.Component
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
            passwordAgain: '',
            errors: {
                firstName: null,
                lastName: null,
                email: null,
                password: null,
                passwordAgain: null
            }
        }

        this.handleInputChange = this.handleInputChange.bind(this)
    }

    formSchema()
    {
        return [
            {
                label: 'First name',
                value: this.state.firstName,
                name: 'firstName',
                type: 'text',
                error: this.state.errors.firstName
            },
            {
                label: 'Last name',
                value: this.state.lastName,
                name: 'lastName',
                type: 'text',
                error: this.state.errors.lastName
            },
            {
                label: 'Email',
                value: this.state.email,
                name: 'email',
                type: 'email',
                error: this.state.errors.email
            },
            {
                label: 'Phone',
                value: this.state.phone,
                name: 'phone',
                type: 'text',
                error: ''
            },
            {
                label: 'Password',
                value: this.state.password,
                name: 'password',
                type: 'password',
                error: this.state.errors.password
            },
            {
                label: 'Confirm password',
                value: this.state.passwordAgain,
                name: 'passwordAgain',
                type: 'password',
                error: this.state.errors.passwordAgain
            }
        ]
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
            first_name: this.state.firstName,
            last_name: this.state.lastName,
            email: this.state.email,
            phone: this.state.phone,
            password: this.state.password
        }

        axios.post(process.env.REACT_APP_API_ROOT + 'user/signup', payload).then((result)=> {
            if(result.data.errors !== undefined)
            {
                let data = result.data.errors;
                let errors = {}

                errors.firstName = (data.first_name) ? data.first_name.message : null
                errors.lastName  = (data.last_name) ? data.last_name.message : null
                errors.email     = (data.email) ? data.email.message : null
                errors.password  = (data.password) ? data.password.message : null

                this.setState({ errors: errors })
                console.log(this.state)
            } else {
                localStorage.setItem('auth_token', result.data.token)
                this.props.history.push('/dashboard')
            }
        }).catch((error)=> {
            console.log(error)
        })
    }

    displayErrorBanner()
    {
        let result = false
        let errors = Object.values(this.state.errors)
        for(let i = 0; i < errors.length; i++)
        {
            if(errors[i] !== null)
            {
                result = true
            }
        }
        return result
    }

    createFormInputs()
    {
        return this.formSchema().map((input, index)=> {
            return (
                <FormInput key={ `form_input_${index}` }
                           label={ input.label }
                           value={ input.value }
                           name={ input.name }
                           error={ input.error }
                           onInputChange={ (event)=> this.handleInputChange(event) } />
            )
        })
    }

    render()
    {
        return (
            <div>
                <MainTitle>Register page</MainTitle>
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <Alert type='danger' display={ this.displayErrorBanner() }>Please fill all the required fields</Alert>

                        <div className="card shadow">
                            <div className="card-body">

                                { this.createFormInputs() }

                                <div className="form-group">
                                    <button type="submit"
                                            disabled={ (this.state.errors.passwordAgain !== null) ? true : false }
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

export default RegisterPage
