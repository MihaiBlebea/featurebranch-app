import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';


class MainNavigation extends React.Component
{
    createAuthButtons()
    {
        console.log(this.props.isAuth)
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

                    <ul className="navbar-nav">
                        { this.createAuthButtons() }
                        <Link className="nav-link" to="/login">Login</Link>
                        <Link className="nav-link" to="/register">Register</Link>
                    </ul>
                </div>
            </nav>
        )
    }
}

const mapStateToProps = (state)=> {
    return {
        isAuth: state.auth.state
    }
}

// const mapDispatchToProps = (dispatch)=> {
//     return {
//         onAuthChange: ()=> dispatch({type: 'USER_AUTH'})
//     }
// }

export default connect(mapStateToProps)(MainNavigation)
