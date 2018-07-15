const onUserLogin = (state, action)=> {
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

const onUserLogout = (state, action)=> {
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

export {
    onUserLogin,
    onUserLogout
}
