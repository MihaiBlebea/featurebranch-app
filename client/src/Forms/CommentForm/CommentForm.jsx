import React from 'react'
import axios from 'axios'
import PropTypes from 'prop-types';

import { schema } from './schema'
import { withErrorValidation } from './../../HOC'

class CommentForm extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            isOpen: false,
            subject: '',
            content: '',

            errors: {
                subject: null,
                content: null
            }
        }

        this.schema = ()=> schema(this.state)
    }

    handleInputChange(event)
    {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleFormSubmit()
    {
        let payload = {
            title: this.state.subject,
            content: this.state.content,
            author: null,
            post: this.props.postId,
        }
        axios.post(process.env.REACT_APP_API_ROOT + 'comment/save', payload).then((result)=> {
            if(result.status === 200)
            {
                this.setState({
                    isOpen: false,
                    subject: '',
                    content: ''
                })
                this.props.onFormSubmit()
            }
        }).catch((error)=> {
            if(error.response.status === 400)
            {
                this.setState({
                    errors: {
                        subject: this.props.validateError(error.response.data.errors.title),
                        content: this.props.validateError(error.response.data.errors.content)
                    }
                })
            }
        })
    }

    toggleOpenState()
    {
        let isOpen = !this.state.isOpen
        this.setState({
            isOpen: isOpen
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
                           error={ input.error }
                           onInputChange={ (event)=> this.handleInputChange(event) } />
            )
        })
    }

    createForm()
    {
        return (
            <div>
                { this.createFormInputs() }
                <div className="form-group">
                    <button type="submit"
                            className="btn btn-primary"
                            onClick={ ()=> this.handleFormSubmit() }>Submit</button>
                </div>
            </div>
        )
    }

    createControlPanel()
    {
        return (
            <div>
                <button className="btn btn-primary"
                        onClick={ ()=> this.toggleOpenState() }>Leave a comment</button>
            </div>
        )
    }

    render()
    {
        return (
            <div>
                { (this.state.isOpen === false) ? this.createControlPanel() : this.createForm() }
            </div>
        )
    }
}

CommentForm.propTypes = {
    postId: PropTypes.string.isRequired,
    onFormSubmit: PropTypes.func.isRequired
};

export default withErrorValidation(CommentForm)
