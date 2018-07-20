import * as type from './types'
import axios from 'axios'

export const login = (email, password)=> {
    return (dispatch)=> {
        dispatch(loginStart())
        let payload = { email, password }
        axios.post(process.env.REACT_APP_API_ROOT + 'user/login', payload).then((result)=> {
            dispatch(loginSuccess(result.data.token, result.data.expire, result.data.user._id))
            dispatch(authCheckTimeout(result.data.expire))
        }).catch((error)=> {
            dispatch(loginFail(error))
            console.log(error)
        })
    }
}

export const loginStart = ()=> {
    return {
        type: type.LOGIN_START
    }
}

export const loginSuccess = (token, expireIn, userId)=> {
    return {
        type: type.LOGIN_SUCCESS,
        token: token,
        expireIn: expireIn,
        userId: userId
    }
}

export const loginFail = (error)=> {
    return {
        type: type.LOGIN_FAIL,
        error: error
    }
}

export const logout = ()=> {
    return {
        type: type.LOGOUT,
    }
}

export const authCheckTimeout = (expireIn)=> {
    return (dispatch)=> {
        setTimeout(()=> {
            dispatch(logout())
        }, expireIn)
    }
}
