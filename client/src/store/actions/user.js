import * as type from './types'
import axios from 'axios'

export const fetchUser = (userId, token)=> {
    return (dispatch)=> {
        axios.get(process.env.REACT_APP_API_ROOT + `user/${userId}?auth_token=${token}`).then((result)=> {
            dispatch(storeUser(result.data.model))
        }).catch((error)=> {
            console.log(error)
        })
    }
}

export const storeUser = (user)=> {
    return {
        type: type.STORE_USER,
        firstName: user.first_name,
        lastName: user.last_name,
        phone: user.phone,
        email: user.email
    }
}
