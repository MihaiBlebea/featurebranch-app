import React from 'react'
import PropTypes from 'prop-types';
import axios from 'axios'

import { FormElement, FormButton } from './../../Components'
import { withErrorValidation } from './../../HOC'


class CommentForm extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            isOpen: false,
            form: {
                subject: {
                    elementType: 'input',
                    label: 'Subject',
                    type: 'text',
                    placeholder: 'Your subject',
                    name: 'subject',
                    value: ''
                },
                content: {
                    elementType: 'textarea',
                    label: 'Message',
                    placeholder: 'Your message',
                    name: 'content',
                    value: ''
                },
            },
            subject: '',
            content: '',

            errors: {
                subject: null,
                content: null
            }
        }

        // this.schema = ()=> schema(this.state)
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
        let payload = {
            title: this.state.form.subject.value,
            content: this.state.form.content.value,
            author: null,
            post: this.props.postId,
        }
        axios.post('comment/save', payload).then((result)=> {
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
        let formArray = []
        for(let key in this.state.form)
        {
            formArray.push({
                ...this.state.form[key],
                id: key
            })
        }
        return formArray.map((input, index)=> {
            let Component = input.component
            return (
                <FormElement key={ 'input_' + index }
                             { ...input }
                             error={ this.state.errors[input.id] }
                             onInputChange={ (event)=> this.handleInputChange(event) }/>
            )
        })
    }

    createForm()
    {
        return (
            <div>
                { this.createFormInputs() }
                <FormButton submit={ ()=> this.handleFormSubmit() } button="Post" />
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
