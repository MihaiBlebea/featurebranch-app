import React from 'react'
import PropTypes from 'prop-types'


const MainHero = (props)=> {
    return (
        <div className={ 'bg-' + (props.bgColor || 'orange') }>
            <div className="container mx-auto flex flex-col py-32">
                { props.children }
            </div>
        </div>
    )
}

MainHero.propTypes = {
    bgColor: PropTypes.string
}

export default MainHero
