import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import Reducers from './redux/reducers.js'
import thunk from 'redux-thunk'

export const store=createStore(Reducers,applyMiddleware(thunk));

ReactDOM.render( <Provider store={store}><App /></Provider> ,document.getElementById('root'));


