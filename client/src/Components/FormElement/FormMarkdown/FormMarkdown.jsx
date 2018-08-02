import React from 'react'
import PropTypes from 'prop-types'

import { MarkdownPreview } from './../../index'


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

    render()
    {
        return (
            <div>
                <textarea className={ "shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline " + (this.props.error ? "border-red" : "") }
                          style={{ overflow: 'hidden' }}
                          ref="markdownTextarea"
                          rows="6"
                          name={ this.props.name }
                          onChange={ (event)=> this.handleInputChange(event) }
                          value={ this.state.content }></textarea>

                <hr />
                <MarkdownPreview markdown={ this.state.content }/>
            </div>
        )
    }
}

FormMarkdown.propTypes = {
    onInputChange: PropTypes.func.isRequired,
    label:         PropTypes.string.isRequired,
    name:          PropTypes.string,
    value:         PropTypes.string,
    error:         PropTypes.string
}

export default FormMarkdown
