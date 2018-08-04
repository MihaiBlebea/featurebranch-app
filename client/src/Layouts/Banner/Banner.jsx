import React from 'react'
import PropTypes from 'prop-types'


const Banner = (props)=> {
    return (
        <div className={ 'bg-' + (props.bgColor || 'orange') }>
            <div className="container mx-auto flex flex-col py-5">
                { props.children }
            </div>
        </div>
    )
}

Banner.propTypes = {
    bgColor: PropTypes.string
}

export default Banner
