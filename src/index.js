import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer, { rootSaga } from './modules';
import createSagaMiddleware from 'redux-saga';
import { check, tempSetUser } from './modules/user';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware)),
);

function loadUser() {
    try {
        // const user = localStorage.getItem('user');
        const token = sessionStorage.getItem('token')
        // if (!user && token) {
        if(!token){
            // 보안을 위해서
            sessionStorage.removeItem('token');
            localStorage.removeItem('user');
            return;
        }
        // store.dispatch(tempSetUser(JSON.parse(user)));
        store.dispatch(check());
    } catch (e) {
        console.log('local Storeage is not working');
    }
}

sagaMiddleware.run(rootSaga);
loadUser();
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
