import React from 'react'

const Alert = (props)=> {
    if(props.display === true)
    {
        return (
            <div className={ 'animated fadeIn alert alert-' + (props.type ? props.type : 'primary') } role="alert">
                { props.children }
            </div>
        )
    } else {
        return null
    }
}

export default Alert
