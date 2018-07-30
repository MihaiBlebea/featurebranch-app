import * as type from './types'
import { axios } from './../../axios'

export const fetchUser = (userId, token)=> {
    return (dispatch)=> {
        axios.get('user').then((result)=> {
            dispatch(storeUser(result.data.model))
        }).catch((error)=> {
            console.log(error)
        })
    }
}

export const storeUser = (user)=> {
    return {
        type:      type.STORE_USER,
        firstName: user.first_name,
        lastName:  user.last_name,
        phone:     user.phone,
        email:     user.email
    }
}
