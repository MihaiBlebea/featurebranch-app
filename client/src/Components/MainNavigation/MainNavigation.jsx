import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import * as actions from './../../store/actions'

class MainNavigation extends React.Component
{
    isAuth()
    {
        return (this.props.token) ? true : false
    }

    handleLogout()
    {
        this.props.onLogout()
    }

    createAuthButtons()
    {
        if(this.isAuth())
        {
            return (
                <ul className="navbar-nav">
                    <li onClick={ ()=> this.handleLogout() } className="nav-link" to="/logout">Logout</li>
                    <Link className="nav-link" to="/profile">Profile</Link>
                </ul>
            )
        } else {
            return (
                <ul className="navbar-nav">
                    <Link className="nav-link" to="/login">Login</Link>
                    <Link className="nav-link" to="/register">Register</Link>
                </ul>
            )
        }
    }

    render()
    {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/blog">Blog</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                    </ul>

                    { this.createAuthButtons() }
                </div>
            </nav>
        )
    }
}

const mapStateToProps = (state)=> {
    return {
        token: state.auth.token
    }
}

const mapDispatchToProps = (dispatch)=> {
    return {
        onLogout: ()=> dispatch(actions.logout())
    }
}

export default connect(mapStateToProps)(MainNavigation)
