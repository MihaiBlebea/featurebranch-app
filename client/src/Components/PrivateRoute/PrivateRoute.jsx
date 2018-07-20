import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import * as Pages from './../../Pages'

const PrivateRoute = (props)=> {
    if(props.isAuth === true)
    {
        return (
            <Route path={ props.path } component={ Pages[props.component] } />
        )
    } else {
        return <Redirect to='/login' />
    }
}

const mapStateToProps = (state)=> {
    return {
        isAuth: state.auth.state
    }
}

export default connect(mapStateToProps)(PrivateRoute)
