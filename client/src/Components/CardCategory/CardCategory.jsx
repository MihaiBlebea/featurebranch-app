import React from 'react'
import Modal from 'react-bootstrap4-modal';

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

    handleConfirmation()
    {
        this.toggleModal()
        this.props.onDelete()
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

                <Modal visible={ this.state.isOpen }
                       dialogClassName="modal-dialog-centered"
                       onClickBackdrop={ ()=> this.toggleModal() }>
                    <div className="modal-body">
                        Are you sure you want to delete { this.props.title } category?
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={ ()=> this.toggleModal() }>
                            Cancel
                        </button>
                        <button type="button" className="btn btn-danger" onClick={ ()=> this.handleConfirmation() }>
                            Delete
                        </button>
                    </div>
                </Modal>
            </div>
        )
    }

}

export default CardCategory
