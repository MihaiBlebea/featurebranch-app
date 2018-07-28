import React from 'react'
import PropTypes from 'prop-types'


const FeatureBox = (props)=> {
    const createBullets = ()=> {
        return props.bullets.map((bullet)=> {
            return (
                <li>{ bullet }</li>
            )
        })
    }

    return (
        <div className="card shadow">
            <div className="card-body">
                <h3 className="text-center">{ props.title }</h3>
                <ul>
                    { createBullets() }
                </ul>
                <div className="row justify-content-center">
                    <button className="btn btn-primary col-md-6">{ props.action.label }</button>
                </div>
            </div>
        </div>
    )
}

FeatureBox.propTypes = {
    title: PropTypes.string.isRequired,
    bullets: PropTypes.array.isRequired,
    action: PropTypes.object.isRequired
}

export default FeatureBox
