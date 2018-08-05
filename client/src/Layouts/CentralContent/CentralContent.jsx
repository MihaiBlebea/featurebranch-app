import React from 'react'

const CentralContent = (props)=> {
    return (
        <div className="py-10">
            <div className="flex flex-wrap justify-center">
                <div className="w-1/2">
                    { props.children }
                </div>
            </div>
        </div>
    )
}

export default CentralContent
