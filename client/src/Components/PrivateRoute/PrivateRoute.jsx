import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...params })=> {
    let auth = false
    return (
        <Route component={ (props)=> {
            return (auth === true) ? <Component { ...props } /> : <Redirect to='/login' />
        } } { ...params }></Route>
    )
}

export default PrivateRoute
