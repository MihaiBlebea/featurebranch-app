import React from 'react'
import { Icon } from 'react-fa'
import PropTypes from 'prop-types'

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
                <ModalConfirmation close={ ()=> this.toggleModal() }
                                   cancel={ ()=> this.toggleModal() }
                                   confirm={ this.props.delete }>
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
                <CardHorizontal image={ this.props.imageUrl } title={ this.props.title }>
                    <p>{ this.props.postsCount } posts</p>
                    <button className="cursor-pointer">
                        <Icon name="edit" />
                    </button>
                    <button className="cursor-pointer"
                            onClick={ ()=> this.toggleModal() }>
                        <Icon name="trash" />
                    </button>
                </CardHorizontal>

                { this.createConfirmationModal() }
            </div>
        )
    }
}

CardCategory.propTypes = {
    imageUrl:   PropTypes.string.isRequired,
    title:      PropTypes.string,
    postsCount: PropTypes.number
}

export default CardCategory
