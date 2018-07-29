import React from 'react'
import random from 'randomstring'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'

const NavigationSecondary = (props)=> {
    const createLinks = ()=> {
        return props.links.map((link)=> {
            return (
                <li className="nav-item" key={ random.generate(6) }>
                    <div className="nav-link"
                         onClick={ ()=> navigateTo(link.path) }
                         style={{ cursor: 'pointer' }}>{ link.label }</div>
                </li>
            )
        })
    }

    const navigateTo = (path)=> {
        props.history.push(path)
    }

    return (
        <ul className="nav text-white">
            { createLinks() }
        </ul>
    )
}

NavigationSecondary.propTypes = {
    links: PropTypes.array.isRequired
}

export default withRouter(NavigationSecondary)
