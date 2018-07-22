import React from 'react'
import { StyleButton } from './index'
import './EditorDraft.css'

let INLINE_STYLES = [
    { label: 'Bold', style: 'BOLD' },
    { label: 'Italic', style: 'ITALIC' },
    { label: 'Underline', style: 'UNDERLINE' },
    { label: 'Monospace', style: 'CODE' }
];

const InlineStyleControls = (props)=> {
    let currentStyle = props.editorState.getCurrentInlineStyle()

    const createMenu = ()=> {
        return INLINE_STYLES.map((type)=> {
            return (
                <StyleButton key={ type.label }
                             active={ currentStyle.has(type.style) }
                             label={ type.label }
                             onToggle={ props.onToggle }
                             style={ type.style } />
            )
        })
    }

    return (
        <div className="RichEditor-controls">
            { createMenu() }
        </div>
    )
}

export default InlineStyleControls
