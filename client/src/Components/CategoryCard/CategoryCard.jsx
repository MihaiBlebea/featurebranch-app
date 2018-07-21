import React from 'react'

const CategoryCard = (props)=> {
    return (
        <div className="card">
            <div className="card-body">
                <div className='row'>
                    <div className="col-md-4">
                        <img src={ props.image.url } className="w-100"/>
                    </div>
                    <div className="col">
                        <strong>{ props.title }</strong>
                        <p className="p-0 mb-0" style={{ cursor: 'pointer' }}>Edit</p>
                        <p className="p-0 mb-0 text-danger" style={{ cursor: 'pointer' }}>Delete</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CategoryCard
