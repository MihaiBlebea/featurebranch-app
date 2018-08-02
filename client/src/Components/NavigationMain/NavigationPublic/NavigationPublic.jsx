import React from 'react'
import { Link } from 'react-router-dom';


const NavigationPublic = ()=> {
    return (
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div className="text-sm lg:flex-grow">
                <Link className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4"
                      to="/">Home</Link>
                <Link className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4"
                      to="/blog">Blog</Link>
                <Link className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4"
                      to="/about">About</Link>
                <Link className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4"
                      to="/contact">Contact</Link>
            </div>
            <div>
                <Link className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4"
                      to="/login">Login</Link>
                <Link className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4"
                      to="/register">Register</Link>
            </div>
        </div>
    )
}

export default NavigationPublic
