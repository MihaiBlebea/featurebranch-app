import React from 'react'
import PropTypes from 'prop-types'

import { ButtonDefault, CardDefault } from './../../index'


const CardComment = (props)=> {
    const toggleApproveButton = ()=> {
        return (
            <ButtonDefault click={ props.onApproveChange }>
                { (!props.isApproved) ? 'Approve' : 'Disapprove' }
            </ButtonDefault>
        )
    }

    return (
        <CardDefault>
            <strong>{ props.subject }</strong>
            <p>{ props.content }</p>
            { toggleApproveButton() }
        </CardDefault>
    )
}

CardComment.propTypes = {
    author:          PropTypes.string.isRequired,
    subject:         PropTypes.string.isRequired,
    content:         PropTypes.string.isRequired,
    isApproved:      PropTypes.bool.isRequired,
    onApproveChange: PropTypes.func.isRequired,
}

export default CardComment
