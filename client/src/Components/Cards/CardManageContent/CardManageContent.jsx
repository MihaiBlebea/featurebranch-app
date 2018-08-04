import React from 'react'
import PropTypes from 'prop-types'

import { withDeleteConfirmation } from './../../../HOC'
import { ButtonDefault, CardRow } from './../../index'


const CardManageContent = (props)=> {

    const viewButton = ()=> {
        return props.view ? <ButtonDefault click={ props.view }>View</ButtonDefault> : null
    }

    const editButton = ()=> {
        return props.edit ? <ButtonDefault click={ props.edit }>Edit</ButtonDefault> : null
    }

    return (
        <CardRow>
            <div className="flex flex-row justify-between items-center w-full">
                { props.children }
                <div className="float-right">
                    { viewButton() }
                    { editButton() }
                    <ButtonDefault click={ ()=> props.triggerConfirmation() }>Delete</ButtonDefault>
                </div>
            </div>
        </CardRow>
    )
}

CardManageContent.propTypes = {
    title:      PropTypes.string.isRequried,
    postsCount: PropTypes.string.isRequried,
    view:       PropTypes.func,
    edit:       PropTypes.func,
    delete:     PropTypes.func.isRequried
}

export default withDeleteConfirmation(CardManageContent)
