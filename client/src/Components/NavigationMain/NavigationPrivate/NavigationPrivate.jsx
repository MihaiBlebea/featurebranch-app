import React from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'


const NavigationPrivate = (props)=> {
    return (
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div className="text-sm lg:flex-grow">
                <Link className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4"
                      to="/admin/dashboard">Dashboard</Link>
                <Link className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4"
                      to="/admin/profile">Profile</Link>
                <Link className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4"
                      to="/admin/category">Category</Link>
                <Link className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4"
                      to="/admin/posts">Posts</Link>
                <Link className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4"
                      to="/admin/post">Post</Link>
                <Link className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4"
                      to="/admin/images">Images</Link>
                <Link className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4"
                      to="/admin/comments">Comments</Link>
            </div>
            <div>
                <Link className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4"
                      to="/admin/profile">{ props.firstName } { props.lastName }</Link>
                <div className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4 cursor-pointer"
                     onClick={ props.onLogout }>Logout</div>
            </div>
        </div>
    )
}

NavigationPrivate.propTypes = {
    onLogout: PropTypes.func.isRequired,
    firstName: PropTypes.string,
    lastName: PropTypes.string
}

export default NavigationPrivate
