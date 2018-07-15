import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import App from './App'
import dotenv from 'dotenv'
import registerServiceWorker from './registerServiceWorker'
import reducer from './store/reducer'

// init the dotenv config //
dotenv.config()

// create a middleware for Redux //
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

// init the redux store and apply middleware //
const store = createStore(reducer, applyMiddleware(logger))

// Wrap the App inside the Provider component and pass the store //
const appWithStore = (
    <Provider store={ store }>
        <App />
    </Provider>
)

ReactDOM.render(appWithStore, document.getElementById('root'))
registerServiceWorker();
