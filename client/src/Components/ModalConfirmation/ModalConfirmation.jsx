import React from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-bootstrap4-modal'


const ModalConfirmation = (props)=> {
    return (
        <Modal visible={ props.isOpen }
               dialogClassName="modal-dialog-centered"
               onClickBackdrop={ ()=> props.toggleModal() }>
            <div className="modal-header">
                <h5 className="modal-title">{ props.title || null }</h5>
            </div>
            <div className="modal-body">
                { props.children }
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={ props.toggleModal }>
                    { props.cancelBtn || 'Cancel' }
                </button>
                <button type="button" className="btn btn-primary" onClick={ props.onConfirm }>
                    { props.confirmBtn || 'Confirm' }
                </button>
            </div>
        </Modal>
    )
}

ModalConfirmation.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    toggleModal: PropTypes.func.isRequired,
    onConfirm: PropTypes.func.isRequired,
    title: PropTypes.string,
    cancelBtn: PropTypes.string,
    confirmBtn: PropTypes.string
}

export default ModalConfirmation
