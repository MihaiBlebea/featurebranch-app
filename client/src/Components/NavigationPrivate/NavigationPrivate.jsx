import React from 'react'
import { Link } from 'react-router-dom';

const NavigationPrivate = (props)=> {
    return (
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <Link className="nav-link" to="/dashboard">Dashboard</Link>
                </li>
                <Link className="nav-link" to="/profile">Profile</Link>
                <Link className="nav-link" to="/category">Category</Link>
            </ul>

            <ul className="navbar-nav">
                <Link className="nav-link" to="/profile">{ props.authUser.firstName } { props.authUser.lastName }</Link>
                <li onClick={ props.onLogout } style={{ cursor: 'pointer' }} className="nav-link">Logout</li>
            </ul>
        </div>
    )
}

export default NavigationPrivate
