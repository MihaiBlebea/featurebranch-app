import React from 'react'
import PropTypes from 'prop-types';

const DefaultLayout = (props)=> {
    return (
        <div className="container mx-auto mb-20">
            { props.children }
        </div>
    )
}

export default DefaultLayout
