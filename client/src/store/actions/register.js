import * as type from './types'
import axios from 'axios'

export const register = (firstName, lastName, email, phone, password)=> {
    return (dispatch)=> {
        dispatch(registerStart())
        let payload = {
            first_name: firstName,
            last_name: lastName,
            email: email,
            phone: phone,
            password: password
        }
        axios.post(process.env.REACT_APP_API_ROOT + 'user/signup', payload).then((result)=> {
            if(result.data.errors === undefined)
            {
                dispatch(registerSuccess(result.data.token, result.data.expire, result.data.user._id))
            } else {
                dispatch(registerFail(result.data.errors))
            }
        }).catch((error)=> {
            console.log(error)
        })
    }
}

export const registerStart = ()=> {
    return {
        type: type.REGISTER_START
    }
}

export const registerSuccess = (token, expireIn, userId)=> {
    const expDate = new Date(new Date().getTime() + expireIn * 1000)
    localStorage.setItem('authToken', token)
    localStorage.setItem('expDate', expDate)
    localStorage.setItem('userId', userId)
    return {
        type: type.REGISTER_SUCCESS,
        token: token,
        expireIn: expireIn,
        userId: userId
    }
}

export const registerFail = (errors)=> {
    return {
        type: type.REGISTER_FAIL,
        errors: {
            firstName: errors.first_name.message,
            lastName: errors.last_name.message,
            email: errors.email.message,
            password: errors.password.message
        }
    }
}
