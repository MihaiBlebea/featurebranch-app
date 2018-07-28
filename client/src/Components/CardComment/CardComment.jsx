import React from 'react'
import PropTypes from 'prop-types'


const CardComment = (props)=> {
    const toggleApproveButton = ()=> {
        if(!props.isApproved)
        {
            return (
                <button className="btn btn-success"
                        onClick={ props.onApprove }>Approve</button>
            )
        } else {
            return (
                <button className="btn btn-danger"
                        onClick={ props.onDisapprove }>Disapprove</button>
            )
        }
    }

    return (
        <div className="card">
            <div className="card-body">
                <div className='row'>
                    <div className="col-md-4">
                        <p>Author name</p>
                    </div>
                    <div className="col">
                        <strong>{ props.subject }</strong>
                        <p>{ props.content }</p>
                        { toggleApproveButton() }
                    </div>
                </div>
            </div>
        </div>
    )
}

CardComment.propTypes = {
    author: PropTypes.string.isRequired,
    subject: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    isApproved: PropTypes.bool.isRequired,
    onApprove: PropTypes.func.isRequired,
    onDisapprove: PropTypes.func.isRequired
}

export default CardComment
