export const userLogin = (token, expireIn)=> {
    return {
        type: 'USER_LOGIN',
        token: token,
        expireIn: expireIn
    }
}

export const userLogout = ()=> {
    return {
        type: 'USER_LOGOUT'
    }
}
