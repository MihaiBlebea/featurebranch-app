import React from 'react'
import PropTypes from 'prop-types'
import { Icon } from 'react-fa'
import random from 'randomstring'


const ButtonSocial = (props)=> {
    const createSocialButtons = ()=> {
        let labels = Object.keys(props)
        let urls = Object.values(props)
        let result = []
        for(let i = 0; i < urls.length; i++)
        {
            result.push(
                <li className="nav-item" key={ random.generate(6) }>
                    <a href={ urls[i] } className="nav-link text-white">
                        <Icon name={ labels[i] } size="lg" />
                    </a>
                </li>
            )
        }
        return result
    }

    return (
        <ul className="nav">
            { createSocialButtons() }
        </ul>
    )
}

ButtonSocial.propTypes = {
    facebook: PropTypes.string,
    twitter:  PropTypes.string,
    linkedin: PropTypes.string,
    github:   PropTypes.string
}


export default ButtonSocial
