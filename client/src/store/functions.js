import { updateState } from './utility'

export const loginStart = (state, action)=> {
    return updateState(state, { isLoading: true })
}

export const loginSuccess = (state, action)=> {
    return updateState(state, {
        auth: {
            token: action.token,
            expDate: action.expDate,
            userId: action.userId
        },
        login: { error: null },
        isLoading: false
    })
}

export const loginFail = (state, action)=> {
    return updateState(state, {
        login: {
            error: action.errors
        },
        isLoading: false
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

export const registerStart = (state, action)=> {
    return updateState(state, { isLoading: true })
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
        },
        isLoading: false
    })
}

export const registerFail = (state, action)=> {
    return updateState(state, {
        register: {
            errors: action.errors
        },
        isLoading: false
    })
}

export const storeUser = (state, action)=> {
    return updateState(state, {
        user: {
            firstName: action.firstName,
            lastName: action.lastName,
            email: action.email,
            phone: action.phone
        }
    })
}
