import React from 'react'

const CardPost = (props)=> {
    return (
        <div className="card">
            <img className="card-img-top" src={ props.imageUrl } alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{ props.title }</h5>
                <div className="row justify-content-between">
                    <div className="col">
                        <span style={{ cursor: 'pointer' }}>View</span>
                    </div>
                    <div className="col">
                        <span style={{ cursor: 'pointer' }}>Edit</span>
                    </div>
                    <div className="col">
                        <span className="text-danger"
                              style={{ cursor: 'pointer' }}
                              onClick={ props.onDelete }>Delete</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CardPost
