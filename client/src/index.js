import React from 'react'
import ReactDOM from 'react-dom'
import dotenv from 'dotenv'
import './css/tailwind.css';
import { Provider } from 'react-redux'
import 'babel-polyfill';
import axios from 'axios'

import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { store } from './store/store'


// init the dotenv config //
dotenv.config()

axios.defaults.baseURL = 'http://localhost:8080/api/v1/'
store.subscribe(()=> {
    axios.defaults.headers.common['Authorization'] = store.getState().auth.token
})
axios.interceptors.request.use((request)=> {
    return request
})

const appWithStore = (
    <Provider store={ store }>
        <App />
    </Provider>
)

ReactDOM.render(appWithStore, document.getElementById('root'))
registerServiceWorker();
