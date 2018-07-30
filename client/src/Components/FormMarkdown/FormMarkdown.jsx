import React from 'react'
import showdown from 'showdown'
import marked from 'marked'
import highlight from 'highlight.js';
import PropTypes from 'prop-types'

import './highlight.css'


class FormMarkdown extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            content: ''
        }

        this.converter = new showdown.Converter()
        this.marked = this.configMarked()
    }

    configMarked()
    {
        return marked.setOptions({
            renderer: new marked.Renderer(),
            highlight: (code, language)=> {
                let value = highlight.highlightAuto(code).value
                return `<pre><code class="hljs ${language}">${value}</code></pre>`
            },
            pedantic: false,
            gfm: true,
            tables: true,
            breaks: false,
            sanitize: true,
            smartLists: true,
            smartypants: false,
            xhtml: false
        })
    }

    convertToHtml()
    {
        // return { __html: this.converter.makeHtml(this.state.content) }
        return { __html: this.marked(this.state.content) }
    }

    handleInputChange(event)
    {
        this.setState({ content: event.target.value })
        this.autoResizeTextarea()
        this.props.onInputChange(event)
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
                              value={ this.props.value }></textarea>
                </div>

                <div className="form-group">
                    <label><strong>Preview</strong></label>
                    <div dangerouslySetInnerHTML={ this.convertToHtml() }></div>

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
