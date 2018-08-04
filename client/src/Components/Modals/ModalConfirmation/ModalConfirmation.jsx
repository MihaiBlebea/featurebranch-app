import React from 'react'
import PropTypes from 'prop-types'

import { ModalDefault, ButtonDefault } from './../../index'


const ModalConfirmation = (props)=> {
    return (
        <ModalDefault close={ props.close }>
            <h3 className="text-center">{ props.children }</h3>
            <div className="inline-flex justify-center mt-6 -mx-2">
                <div className="px-2">
                    <ButtonDefault click={ props.cancel }>{ props.textCancel || 'Cancel' }</ButtonDefault>
                </div>
                <div className="px-2">
                    <ButtonDefault click={ props.confirm }>{ props.textConfirm || 'Confirm' }</ButtonDefault>
                </div>
            </div>
        </ModalDefault>
    )
}

ModalConfirmation.propTypes = {
    close:       PropTypes.func.isRequired,
    cancel:      PropTypes.func.isRequired,
    confirm:     PropTypes.func.isRequired,
    textCancel:  PropTypes.string,
    textConfirm: PropTypes.string
}

export default ModalConfirmation
