import React from 'react'
import PropTypes from 'prop-types'

import { MarkdownPreview } from './../index'


class FormMarkdown extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            content: ''
        }
    }

    componentDidMount()
    {
        this.setState({ content: this.props.value })
        let content = localStorage.getItem('content')
        if(content !== null)
        {
            this.setState({ content: content })
        }
    }

    handleInputChange(event)
    {
        this.setState({ content: event.target.value })
        this.autoResizeTextarea()
        this.props.onInputChange(event)
        localStorage.setItem('content', this.props.value)
    }

    autoResizeTextarea()
    {
        let textarea = this.refs.markdownTextarea
        if(textarea.scrollHeight > textarea.clientHeight)
        {
            textarea.style.height = textarea.scrollHeight + 'px'
        }
    }

    createErrorMessage()
    {
        if(this.props.error !== null)
        {
            return (
                <div className="invalid-feedback">{ this.props.error }</div>
            )
        }
    }

    render()
    {
        return (
            <div>
                <div className="form-group">
                    <label>{ this.props.label }</label>
                    <textarea className={ "form-control " + (this.props.error ? "is-invalid" : "") }
                              style={{ overflow: 'hidden' }}
                              ref="markdownTextarea"
                              rows="6"
                              name={ this.props.name }
                              onChange={ (event)=> this.handleInputChange(event) }
                              value={ this.state.content }></textarea>
                </div>

                <div className="form-group">
                    <label><strong>Preview</strong></label>
                    <MarkdownPreview markdown={ this.state.content }/>
                </div>

            </div>
        )
    }
}

FormMarkdown.propTypes = {
    onInputChange: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    name: PropTypes.string,
    value: PropTypes.string,
    error: PropTypes.string,
}

export default FormMarkdown
