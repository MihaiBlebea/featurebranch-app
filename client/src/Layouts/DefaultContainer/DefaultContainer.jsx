import React from 'react'


const DefaultContainer = (props)=> {
    return (
        <div className="container">
            <div className="my-5">
                { props.children }
            </div>
        </div>
    )
}

export default DefaultContainer
