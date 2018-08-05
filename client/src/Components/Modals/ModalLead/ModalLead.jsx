import React from 'react'
import PropTypes from 'prop-types'

import { ModalDefault } from './../index'
import { LeadForm } from './../../../Forms'


const ModalLead = (props)=> {
    return (
        <ModalDefault close={ props.close }>
            <LeadForm />
        </ModalDefault>
    )
}

export default ModalLead
