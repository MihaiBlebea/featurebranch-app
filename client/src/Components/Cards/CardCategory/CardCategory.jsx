import React from 'react'
import { Icon } from 'react-fa'

import { CardHorizontal } from './../index'
import { ModalConfirmation } from './../../index'


class CardCategory extends React.Component
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
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    createConfirmationModal()
    {
        if(this.state.isOpen)
        {
            return (
                <ModalConfirmation close={ ()=> this.toggleModal() }>
                    You are about to delete { this.props.title }. Are you sure you want to continue?
                </ModalConfirmation>
            )
        }
        return null
    }

    render()
    {
        return (
            <div>
                <CardHorizontal image={ this.props.image.url } title={ this.props.title }>
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
                </CardHorizontal>

                { this.createConfirmationModal() }
            </div>
        )
    }
}

export default CardCategory
