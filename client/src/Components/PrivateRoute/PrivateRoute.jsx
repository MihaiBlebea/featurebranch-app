import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'


const PrivateRoute = ({ component: Component, ...rest })=> {
  return (
    <Route
        { ...rest }
        render={ (props) => { return (props.isAuth === true) ? <Component {...props} /> : <Redirect to='/login' /> }}
    />
  )
}

const mapStateToProps = (state)=> {
    return {
        isAuth: state.auth.state
    }
}

export default connect(mapStateToProps)(PrivateRoute)
