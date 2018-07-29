import React from 'react'
import axios from 'axios'

import { schema } from './schema'
import { FormImageSelect } from './../../Components'
import { withErrorValidation } from './../../HOC'

class CategoryForm extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            title: '',
            slug: '',
            description: '',
            image: null,

            errors: {
                title: null,
                slug: null,
                description: null
            }
        }

        this.schema = ()=> schema(this.state)
    }

    handleInputChange(event)
    {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSelectImage(image)
    {
        this.setState({
            image: image
        })
    }

    handleClearForm()
    {
        this.setState({
            title: '',
            slug: '',
            description: '',
            image: null,

            errors: {
                title: null,
                slug: null,
                description: null
            }
        })
    }

    handleFormSubmit()
    {
        let payload = {
            title: this.state.title,
            slug: this.state.slug,
            description: this.state.description,
            main_image: (this.state.image) ? this.state.image._id : null
        }
        let url = process.env.REACT_APP_API_ROOT + `category/save?auth_token=${this.props.token}`
        axios.post(url, payload).then((result)=> {
            if(result.status === 200)
            {
                this.handleClearForm()
                this.props.onNewCategory()
            }
        }).catch((error)=> {
            if(error.response.status === 400)
            {
                this.setState({
                    errors: {
                        title: this.props.validateError(error.response.data.errors.title),
                        slug: this.props.validateError(error.response.data.errors.slug),
                        description: this.props.validateError(error.response.data.errors.description)
                    }
                })
            }
        })
    }

    createFormInputs()
    {
        return this.schema().map((input, index)=> {
            let Component = input.component
            return (
                <Component key={ `form_input_${index}` }
                           label={ input.label }
                           value={ input.value }
                           name={ input.name }
                           type={ input.type }
                           options={ input.options || null}
                           error={ input.error }
                           onInputChange={ (event)=> this.handleInputChange(event) } />
            )
        })
    }

    render()
    {
        return (
            <div>
                <FormImageSelect imageUrl={ this.state.image ? this.state.image.url : null }
                                 onSelectImage={ (image)=> this.handleSelectImage(image) }/>

                { this.createFormInputs() }

                <div className="form-group">
                    <button type="submit"
                            className="btn btn-primary"
                            onClick={ ()=> this.handleFormSubmit() }>Submit</button>
                </div>
            </div>
        )
    }
}



export default withErrorValidation(CategoryForm)
