import React from 'react'
import PropTypes from 'prop-types'


const CardHorizontal = (props)=> {
    return (
        <div className="max-w-md w-full lg:flex">
            <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                 style={{ backgroundImage: 'url(' + props.image  + ')' }}>
            </div>
            <div className="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="mb-8">
                    <div className="text-black font-bold text-xl mb-2">{ props.title }</div>
                    { props.children }
                </div>
            </div>
        </div>
    )
}

CardHorizontal.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string
}

export default CardHorizontal
