import React from 'react'
import marked from 'marked'
import plainText from 'marked-plaintext'
import PropTypes from 'prop-types';

import './CardFrontPost.css'


const CardFrontPost = (props)=> {
    const createExcerpt = (content)=> {
        return (content !== null && content !== undefined) ? markdownToPlainText(content).substr(0, 150) + '... ' : null
    }

    const createReadMoreLink = ()=> {
        return (
            <span className="ReadMoreLink text-primary"
                  onClick={ props.onClickAction }>Read more</span>
        )
    }

    const markdownToPlainText = (markdown)=> {
        let renderer = new plainText;
        return marked(markdown, { renderer: renderer })
    }

    return (
        <div className="CardFrontPost card">
            <div className="Image-Wrapper">
                <img className="Image w-100"
                     alt="card-post"
                     style={{ cursor: 'pointer' }}
                     src={ props.imageUrl }
                     onClick={ props.onClickAction } />
            </div>
            <div className="card-body">
                <h3>{ props.title }</h3>
                { createExcerpt(props.content) }
                { createReadMoreLink() }
                <hr />

                <div className="row small">
                    <div className="col-md-6">
                        { props.author } | { props.publishDate }
                    </div>
                    <div className="col">
                        <span className="float-md-right">{ props.commentsCount } comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

CardFrontPost.propTypes = {
    imageUrl:      PropTypes.string.isRequired,
    title:         PropTypes.string.isRequired,
    onClickAction: PropTypes.func.isRequired,
    author:        PropTypes.string.isRequired,
    publishDate:   PropTypes.string.isRequired,
    content:       PropTypes.string,
    commentsCount: PropTypes.number
}

export default CardFrontPost
