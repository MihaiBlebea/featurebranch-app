import React from 'react'
import PropTypes from 'prop-types'
import marked from 'marked'
import highlight from 'highlight.js';

import './highlight.css'

const MarkdownPreview = (props)=> {

    const configMarked = ()=> {
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

    const convertToHtml = ()=> {
        let converter = configMarked()
        return { __html: converter(props.markdown) }
    }

    return (
        <div dangerouslySetInnerHTML={ convertToHtml() }></div>
    )
}

MarkdownPreview.propTypes = {
    markdown: PropTypes.string
}

export default MarkdownPreview
