import React from 'react'

const ModalConfirmation = (props)=> {
    return (
        <div className="modal fade" id={ props.modalId } tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Are you sure?</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        { props.children }
                    </div>
                    <div className="modal-footer">
                        <button className="btn btn-secondary"
                                data-dismiss="modal">Close</button>
                        <button className="btn btn-primary"
                                data-dismiss="modal"
                                onClick={ props.onConfirmation }>Yes I am sure</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalConfirmation
