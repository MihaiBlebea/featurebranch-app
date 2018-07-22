import React from 'react'
import { connect } from 'react-redux'

import * as actions from './../../store/actions'
import { NavigationPublic, NavigationPrivate } from './../index'

class NavigationMain extends React.Component
{
    constructor()
    {
        super();
        this.handleLogout = this.handleLogout.bind(this);
    }

    isAuth()
    {
        return (this.props.token) ? true : false
    }

    handleLogout()
    {
        this.props.onLogout()
    }

    render()
    {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                { this.isAuth()
                    ? <NavigationPrivate onLogout={ this.handleLogout } authUser={ this.props.user }/>
                    : <NavigationPublic /> }
            </nav>
        )
    }
}

const mapStateToProps = (state)=> {
    return {
        token: state.auth.token,
        user: state.user
    }
}

const mapDispatchToProps = (dispatch)=> {
    return {
        onLogout: ()=> dispatch(actions.logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationMain)
