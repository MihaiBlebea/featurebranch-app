import React from 'react'
import { Icon } from 'react-fa'

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
                                <button className="btn btn-secondary btn-sm mr-2"
                                        style={{ cursor: 'pointer' }}>
                                    <Icon name="edit" />
                                </button>
                                <button className="btn btn-danger btn-sm"
                                        style={{ cursor: 'pointer' }}
                                        onClick={ ()=> this.toggleModal() }>
                                    <Icon name="trash" />
                                </button>
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
