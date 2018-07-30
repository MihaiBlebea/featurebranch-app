import React from 'react'
import ReactDOM from 'react-dom'
import dotenv from 'dotenv'
import { Provider } from 'react-redux'
import 'babel-polyfill';

import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { store } from './store/store'


// init the dotenv config //
dotenv.config()


const appWithStore = (
    <Provider store={ store }>
        <App />
    </Provider>
)

ReactDOM.render(appWithStore, document.getElementById('root'))
registerServiceWorker();
