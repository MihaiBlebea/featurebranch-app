import React from 'react'


const CardDefault = (props)=> {
    return (
        <div className="w-full mx-auto">
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                { props.children }
            </div>
        </div>
    )
}

export default CardDefault
