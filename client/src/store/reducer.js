import { onUserLogin, onUserLogout } from './utility'

const initState = {
    auth: {
        state: false,
        token: null
    }
}

const reducer = (state = initState, action)=> {
    switch(action.type)
    {
        case 'USER_LOGIN':
            return onUserLogin(state, action)
        case 'USER_LOGOUT':
            return onUserLogout(state, action)
        default:
            return state
    }
}

export default reducer
