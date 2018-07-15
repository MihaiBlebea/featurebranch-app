import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './App'
import dotenv from 'dotenv'
import registerServiceWorker from './registerServiceWorker'
import reducer from './store/reducer'

// init the dotenv config //
dotenv.config()

// For init the Redux dev tools in Chrome browser //
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__

// init the redux store //
const store = createStore(reducer)

// Wrap the App inside the Provider component and pass the store //
const appWithStore = (
    <Provider store={ store }>
        <App />
    </Provider>
)

ReactDOM.render(appWithStore, document.getElementById('root'))
registerServiceWorker();
