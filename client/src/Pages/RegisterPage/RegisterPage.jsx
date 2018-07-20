import React from 'react'
import { connect } from 'react-redux'
import * as actions from './../../store/actions'
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
            passwordAgain: ''
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
                error: this.props.errors.firstName
            },
            {
                label: 'Last name',
                value: this.state.lastName,
                name: 'lastName',
                type: 'text',
                error: this.props.errors.lastName
            },
            {
                label: 'Email',
                value: this.state.email,
                name: 'email',
                type: 'email',
                error: this.props.errors.email
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
                error: this.props.errors.password
            },
            {
                label: 'Confirm password',
                value: this.state.passwordAgain,
                name: 'passwordAgain',
                type: 'password',
                error: this.passwordConfirmationMatch()
            }
        ]
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
        let result = false
        let errors = Object.values(this.props.errors)
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
                           type={ input.type }
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
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state)=> {
    return {
        errors: state.register.errors
    }
}

const mapDispatchToProps = (dispatch)=> {
    return {
        onRegister: (firstName, lastName, email, phone, password)=> {
            dispatch(actions.register(firstName, lastName, email, phone, password))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage)
