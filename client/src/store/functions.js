import { updateState } from './utility'

export const loginSuccess = (state, action)=> {
    return updateState(state, {
        auth: {
            token: action.token,
            expDate: action.expDate,
            userId: action.userId
        },
        login: { error: null }
    })
}

export const loginFail = (state, action)=> {
    return updateState(state, {
        login: {
            error: action.errors
        }
    })
}

export const logout = (state, action)=> {
    return updateState(state, {
        auth: {
            token: null,
            expDate: null,
            userId: null
        }
    })
}

export const authCheckTimeout = (state, action)=> {
    return updateState(state, {
        auth: {
            token: null,
            expDate: null,
            userId: null
        }
    })
}

export const registerSuccess = (state, action)=> {
    return updateState(state, {
        auth: {
            token: action.token,
            expDate: action.expireIn,
            userId: action.userId
        },
        errors: {
            firstName: null,
            lastName: null,
            email: null,
            password: null
        }
    })
}

export const registerFail = (state, action)=> {
    return updateState(state, {
        register: {
            errors: action.errors
        }
    })
}
