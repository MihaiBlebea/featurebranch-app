import * as type from './types'
import axios from 'axios'

export const loginSuccess = (token, expireIn, userId)=> {
    return {
        type: type.userLogin,
        token: token,
        expireIn: expireIn,
        userId: userId
    }
}

export const loginFail = ()=> {
    return {
        type: type.loginFail
    }
}

export const userLogin = (email, password)=> {
    return (dispatch)=> {
        let payload = { email, password }
        axios.post(process.env.REACT_APP_API_ROOT + 'user/login', payload).then((result)=> {
            dispatch(loginSuccess(result.headers['x-auth'], 3600, result.data._id))
        }).catch((error)=> {
            dispatch(loginFail())
            console.log(error)
        })
    }
}

export const userLogout = ()=> {
    return {
        type: type.userLogout
    }
}

export const authCheck = ()=> {
    return {
        type: type.authCheck,
    }
}
