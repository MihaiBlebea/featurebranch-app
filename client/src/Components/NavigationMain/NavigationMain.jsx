import React from 'react'
import { connect } from 'react-redux'

import * as actions from './../../store/actions'
import { NavigationPublic, NavigationPrivate } from './index'

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

    createNavigationLinks()
    {
        if(this.isAuth())
        {
            return (
                <NavigationPrivate onLogout={ this.handleLogout }
                                   firstName={ this.props.user.firstName }
                                   lastName={ this.props.user.lastName } />
            )
        }
        return <NavigationPublic />
    }

    render()
    {
        return (
            <nav className="flex items-center justify-between flex-wrap bg-teal p-6">

                <div className="flex items-center flex-no-shrink text-white mr-6">
                    <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
                    <span className="font-semibold text-xl tracking-tight">Tailwind CSS</span>
                </div>

                <div className="block lg:hidden">
                    <button className="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white">
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                    </button>
                </div>

                { this.createNavigationLinks() }
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
