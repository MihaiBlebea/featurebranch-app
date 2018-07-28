import React from 'react'
import { Link } from 'react-router-dom';

const NavigationPrivate = (props)=> {
    return (
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <Link className="nav-link" to="/admin/dashboard">Dashboard</Link>
                </li>
                <Link className="nav-link" to="/admin/profile">Profile</Link>
                <Link className="nav-link" to="/admin/category">Category</Link>
                <Link className="nav-link" to="/admin/posts">Posts</Link>
                <Link className="nav-link" to="/admin/post">Post</Link>
                <Link className="nav-link" to="/admin/images">Images</Link>
                <Link className="nav-link" to="/admin/comments">Comments</Link>
            </ul>

            <ul className="navbar-nav">
                <Link className="nav-link" to="/admin/profile">{ props.authUser.firstName } { props.authUser.lastName }</Link>
                <li onClick={ props.onLogout } style={{ cursor: 'pointer' }} className="nav-link">Logout</li>
            </ul>
        </div>
    )
}

export default NavigationPrivate
