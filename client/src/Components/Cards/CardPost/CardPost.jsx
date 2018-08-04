import React from 'react'
import PropTypes from 'prop-types';

import { CardStacked } from './../../index'


const CardPost = ()=> {

    const createExcerpt = (content)=> {
        return (content !== null && content !== undefined) ? content.substr(0, 100) + '...' : null
    }

    return (
        <CardStacked imageUrl={ this.props.imageUrl }>
            <h3>{ this.props.title }</h3>
            <p>{ createExcerpt(this.props.content) }</p>
            <hr />
            <div className="flex mb-4">
                <div className="w-3/4">
                    <span className="text-sm">{ this.props.author } | { this.props.publishDate }</span>
                </div>
                <div className="w-1/4">
                    <span className="text-sm">{ this.props.commentsCount } comments</span>
                </div>
            </div>
        </CardStacked>
    )
}

CardPost.propTypes = {
    imageUrl:      PropTypes.string.isRequired,
    title:         PropTypes.string.isRequired,
    id:            PropTypes.string.isRequired,
    slug:          PropTypes.string.isRequired,
    onDelete:      PropTypes.func.isRequired,
    author:        PropTypes.string.isRequired,
    publishDate:   PropTypes.string.isRequired,
    content:       PropTypes.string,
    commentsCount: PropTypes.number
}


export default CardPost
