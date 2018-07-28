import React from 'react'
import PropTypes from 'prop-types';

const DefaultLayout = (props)=> {
    return (
        <div className="container">
            <div className="my-5">
                <div className={ 'row' + (props.horizontalCenter ? ' justify-content-center' : '') }>
                    <div className={ 'col-md-' + (props.col || 12)  }>
                        { props.children }
                    </div>
                </div>
            </div>
        </div>
    )
}

DefaultLayout.propTypes = {
    col: PropTypes.number,
    horizontalCenter: PropTypes.bool,
}

export default DefaultLayout
