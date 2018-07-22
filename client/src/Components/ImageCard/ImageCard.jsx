import React from 'react'

const ImageCard = (props)=> {
    return (
        <div className="card">
            <img className={'w-100 ' + (props.isSelected ? 'border border-primary' : '') }
                 style={{ cursor: 'pointer' }}
                 src={ props.url }
                 onClick={ props.handleSelected } />
            <div className="card-body p-1">
                <span className="text-danger"
                      style={{ cursor: 'pointer' }}
                      onClick={ props.handleDelete }>Delete</span>
            </div>
        </div>
    )
}

export default ImageCard
