import React from 'react'
import PropTypes from 'prop-types'

import { ModalConfirmation } from './../../Components'


const withDeleteConfirmation = (Component)=> {
    return class WithDeleteConfirmation extends React.Component
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
                        You are about to delete a model. Are you sure you want to continue?
                    </ModalConfirmation>
                )
            }
            return null
        }

        render()
        {
            return (
                <div>
                    { this.createConfirmationModal() }
                    <Component { ...this.props }
                               triggerConfirmation={ ()=> this.toggleModal() } />
                </div>
            )
        }
    }
}

withDeleteConfirmation.propTypes = {
    delete: PropTypes.func.isRequried
}

export default withDeleteConfirmation
