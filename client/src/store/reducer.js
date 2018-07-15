const initState = {
    auth: {
        state: false,
        token: null
    }
}

const reducer = (state = initState, action)=> {
    if(action.type === 'USER_LOGIN')
    {
        const expDate = new Date(new Date().getTime() + action.expireIn * 1000)
        localStorage.setItem('authToken', action.token)
        localStorage.setItem('expDate', expDate)
        return {
            ...state,
            auth: {
                state: true,
                token: action.token
            }
        }
    }

    if(action.type === 'USER_LOGOUT')
    {
        localStorage.removeItem('authToken')
        localStorage.removeItem('expDate')
        return {
            ...state,
            auth: {
                state: false,
                token: null
            }
        }
    }
    return state
}

export default reducer
