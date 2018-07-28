import React from 'react'
import PropTypes from 'prop-types';
import { withRouter } from 'react-router'

import { ModalConfirmation } from './../index'


class CardPost extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            isOpen: false
        }
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
        this.props.history.push(`/admin/preview/${this.props.slug}`)
    }

    handleEditPost()
    {
        this.props.history.push(`/admin/post?edit=${this.props.id}`)
    }

    createConfirmationModal()
    {
        return (
            <ModalConfirmation isOpen={ this.state.isOpen }
                               toggleModal={ ()=> this.toggleModal() }
                               onConfirm={ ()=> this.props.onDelete() }>
                You are about to delete { this.props.title }. Are you sure you want to continue?
            </ModalConfirmation>
        )
    }

    render()
    {
        return (
            <div>
                <div className="card">
                    <img className="card-img-top" src={ this.props.imageUrl } alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">{ this.props.title }</h5>
                        <p>{ this.props.excerpt }</p>

                        <button className="btn btn-primary mr-2"
                                style={{ cursor: 'pointer' }}
                                onClick={ ()=> this.handlePostPreview() }>Preview</button>
                        <button className="btn btn-secondary mr-2"
                                style={{ cursor: 'pointer' }}
                                onClick={ ()=> this.handleEditPost() }>Edit</button>
                        <button className="btn btn-danger"
                                style={{ cursor: 'pointer' }}
                                onClick={ ()=> this.toggleModal() }>Delete</button>
                    </div>
                </div>

                { this.createConfirmationModal() }
            </div>
        )
    }
}

CardPost.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    title:    PropTypes.string.isRequired,
    id:       PropTypes.string.isRequired,
    slug:     PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
    excerpt:  PropTypes.string
}

export default withRouter(CardPost)
