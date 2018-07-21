export const updateState = (oldObject, newObject)=> {
    return {
        ...oldObject,
        ...newObject
    }
}



// export const onUserLogin = (state, action)=> {
//     const expDate = new Date(new Date().getTime() + action.expireIn * 1000)
//     localStorage.setItem('authToken', action.token)
//     localStorage.setItem('expDate', expDate)
//     localStorage.setItem('userId', action.userId)
//     return {
//         ...state,
//         auth: {
//             token: action.token,
//             expDate: expDate,
//             userId: action.userId
//         }
//     }
// }
//
// export const onUserLogout = (state, action)=> {
//     localStorage.removeItem('authToken')
//     localStorage.removeItem('expDate')
//     localStorage.removeItem('userId')
//     return {
//         ...state,
//         auth: {
//             token: null,
//             expDate: null,
//             userId: null
//         }
//     }
// }
//
// export const onCheckAuth = ()=> {
//     return (dispatch)=> {
//         let authToken = localStorage.get('authToken')
//         if(!authToken)
//         {
//             dispatch(onUserLogout())
//         } else {
//             let expDate = new Date(localStorage.get('expDate'))
//             let now = new Date()
//             if(expDate > now)
//             {
//                 dispatch(onUserLogout())
//             } else {
//                 let userId = localStorage.get('userId')
//                 let newExpDate = expDate.getSeconds() - new Date().getSeconds()
//                 dispatch(onUserLogin(authToken, newExpDate, userId))
//             }
//         }
//     }
// }
