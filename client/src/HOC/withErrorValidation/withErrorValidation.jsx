import React from 'react'

const withErrorValidation = (Component)=> (props)=> {
    const validateError = (error)=> {
        return error ? error.message : null
    }
    return <Component { ...props } validateError= { (error)=> validateError(error) }/>
}

export default withErrorValidation
