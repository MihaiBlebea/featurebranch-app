import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import dotenv from 'dotenv'
import registerServiceWorker from './registerServiceWorker';

dotenv.config()

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
