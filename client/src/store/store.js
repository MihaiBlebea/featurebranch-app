import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer'

// Create middleware //
const logger = (store)=> {
    return (next)=> {
        return (action)=> {
            console.log('[Middleware Dispatching]: ', action)
            let result = next(action)
            console.log('[Middleware state]: ', store.getState())
            return result
        }
    }
}

// Create and export store
export const store = createStore(reducer, applyMiddleware(logger, thunk))
