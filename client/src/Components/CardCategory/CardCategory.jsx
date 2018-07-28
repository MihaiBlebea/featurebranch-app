import React from 'react'
import Modal from 'react-bootstrap4-modal';

import { ModalConfirmation } from './../index'


class CardCategory extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            isOpen: false
        }
    }

    createImage()
    {
        return (this.props.image) ? ( <img src={ this.props.image.url } className="w-100" alt="card" /> ) : null
    }

    toggleModal()
    {
        this.setState({
            isOpen: !this.state.isOpen
        })
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
                    <div className="card-body">
                        <div className='row'>
                            <div className="col-md-4">
                                { this.createImage() }
                            </div>
                            <div className="col">
                                <strong>{ this.props.title }</strong>
                                <p>{ this.props.postsCount } posts</p>
                                <p className="p-0 mb-0" style={{ cursor: 'pointer' }}>Edit</p>
                                <p className="p-0 mb-0 text-danger"
                                   style={{ cursor: 'pointer' }}
                                   onClick={ ()=> this.toggleModal() } >Delete</p>
                            </div>
                        </div>
                    </div>
                </div>

                { this.createConfirmationModal() }
            </div>
        )
    }

}

export default CardCategory
