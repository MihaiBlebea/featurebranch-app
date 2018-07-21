import React from 'react'
import { ModalConfirmation } from './../index'


const CategoryCard = (props)=> {
    return (
        <div>
            <div className="card">
                <div className="card-body">
                    <div className='row'>
                        <div className="col-md-4">
                            <img src={ props.image.url } className="w-100"/>
                        </div>
                        <div className="col">
                            <strong>{ props.title }</strong>
                            <p className="p-0 mb-0" style={{ cursor: 'pointer' }}>Edit</p>
                            <p className="p-0 mb-0 text-danger"
                               style={{ cursor: 'pointer' }}
                               data-toggle="modal"
                               data-target={ '#confirmation_' + props.id }>Delete</p>
                        </div>
                    </div>
                </div>
            </div>

            <ModalConfirmation modalId={ 'confirmation_' + props.id }
                               onConfirmation={ props.onDelete }>
                Are you sure you want to delete { props.title } category?
            </ModalConfirmation>
        </div>
    )
}

export default CategoryCard
