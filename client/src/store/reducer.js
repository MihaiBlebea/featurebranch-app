import * as type from './actions/types'

const initState = {
    auth: {
        token: null,
        expDate: null,
        userId: null,
        error: null
    }
}

const reducer = (state = initState, action)=> {
    switch(action.type)
    {
        case type.userLogin:
            return {
                ...state,
                auth: {
                    token: action.token,
                    expDate: action.expDate,
                    userId: action.userId
                }
            }
        case type.userLogout:
            return {
                ...state,
                auth: {
                    token: null,
                    expDate: null,
                    userId: null
                }
            }
        case type.loginSuccess:
            return {
                ...state,
                auth: {
                    ...state.auth,
                    error: null
                }
            }
        case type.loginFail:
            return {
                ...state,
                auth: {
                    ...state.auth,
                    error: true
                }
            }
        case type.authCheck:
            return {
                ...state,
                auth: {
                    token: null,
                    expDate: null,
                    userId: null
                }
            }
        default:
            return state
    }
}

export default reducer
