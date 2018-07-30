import Axios from 'axios'

const fetchToken = ()=> {
    return localStorage.getItem('authToken')
}

export const axios = Axios.create({
    baseURL: process.env.REACT_APP_API_ROOT,
    timeout: 1000,
    headers: { 'default': 'foot' },
    params: {
        auth_token: fetchToken()
    }
})
