import React from 'react'
import { connect } from 'react-redux'

import axios from 'axios'
import { schema } from './schema'
import { FormImageSelect, FormInput } from './../../Components'


class ProfileForm extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            image: null,
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            description: '',
            password: '',
            passwordAgain: '',

            errors: {
                firstName: null,
                lastName: null,
                email: null,
                phone: null,
                description: null,
                password: null,
            }
        }
        this.schema = ()=> schema(this.state)
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
        this.setState({ [event.target.name]: event.target.value })
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
        return this.schema().map((input, index)=> {
            let Component = input.component || FormInput
            return (
                <Component key={ 'input_' + index }
                           label={ input.label }
                           value={ input.value }
                           name={ input.name }
                           type={ input.type }
                           error={ (input.name === 'passwordAgain') ? this.passwordConfirmationMatch() : input.error }
                           onInputChange={ (event)=> this.handleInputChange(event) } />
            )
        })
    }

    render()
    {
        return (
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <FormImageSelect imageUrl={ this.state.image ? this.state.image.url : null }
                                     onSelectImage={ (image)=> this.handleSelectImage(image) }/>

                    { this.createFormInputs() }

                    <div className="form-group">
                        <button type="submit"
                                disabled={ (this.passwordConfirmationMatch() !== null) ? true : false }
                                className="btn btn-primary"
                                onClick={ ()=> this.handleFormSubmit() }>Submit</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProfileForm
