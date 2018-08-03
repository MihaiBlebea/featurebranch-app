import React from 'react'
import PropTypes from 'prop-types';
import { withRouter } from 'react-router'
import { Icon } from 'react-fa'

import { CardStacked, ModalConfirmation } from './../../index'


class CardPost extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            isOpen: false
        }
    }

    createExcerpt(content)
    {
        return (content !== null && content !== undefined) ? content.substr(0, 100) + '...' : null
    }

    toggleModal()
    {
        let isOpen = !this.state.isOpen
        this.setState({
            isOpen: isOpen
        })
    }

    handlePostPreview()
    {
        this.props.history.push('/admin/preview/' + this.props.slug)
    }

    handleEditPost()
    {
        this.props.history.push('/admin/post?edit=' + this.props.id)
    }

    createAdminControls()
    {

    }

    createConfirmationModal()
    {
        if(this.state.isOpen)
        {
            return (
                <ModalConfirmation close={ ()=> this.toggleModal() }
                                   cancel={ ()=> this.toggleModal() }
                                   confirm={ ()=> this.props.onDelete() }>
                    You are about to delete "{ this.props.title }". Are you sure you want to continue?
                </ModalConfirmation>
            )
        }
        return null
    }

    render()
    {
        return (
            <div>
                <CardStacked image={ this.props.imageUrl }>
                    <h3>{ this.props.title }</h3>
                    <p>{ this.createExcerpt(this.props.content) }</p>
                    <hr />
                    <div class="flex mb-4">
                        <div class="w-3/4">
                            <span className="text-sm">{ this.props.author } | { this.props.publishDate }</span>
                        </div>
                        <div class="w-1/4">
                            <span className="text-sm">{ this.props.commentsCount } comments</span>
                        </div>
                    </div>
                </CardStacked>

                { this.createConfirmationModal() }
            </div>
        )
    }
}

// <div className="CardPost card">
//     <div className="Image-Wrapper">
//         <img className="Image card-img-top" src={ this.props.imageUrl } alt="Card-cap" />
//     </div>
//     <div className="card-body">
//         <h5 className="text-center">{ this.props.title }</h5>
//         { this.createExcerpt(this.props.content) }
//         <hr />
//
//         <div className="row small">
//             <div className="col-md-8">
//                 { this.props.author } | { this.props.publishDate }
//             </div>
//             <div className="col">
//                 <span className="float-md-right">{ this.props.commentsCount } comments</span>
//             </div>
//         </div>
//     </div>
//     <div className="card-footer">
//
//         <button className="btn btn-sm btn-primary mr-2"
//                 style={{ cursor: 'pointer' }}
//                 onClick={ ()=> this.handlePostPreview() }>
//             <Icon name="eye" size="lg" />
//         </button>
//         <button className="btn btn-sm btn-secondary mr-2"
//                 style={{ cursor: 'pointer' }}
//                 onClick={ ()=> this.handleEditPost() }>
//             <Icon name="edit" size="lg" />
//         </button>
//         <button className="btn btn-sm btn-danger"
//                 style={{ cursor: 'pointer' }}
//                 onClick={ ()=> this.toggleModal() }>
//             <Icon name="trash" size="lg" />
//         </button>
//     </div>
// </div>

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


export default withRouter(CardPost)
