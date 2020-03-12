import React from 'react';
import ReactDom from 'react-dom';
import ProgressList from './components/progress-list';
import {combineReducers, createStore} from 'redux';
import './styles/main.scss';
import {Provider} from 'react-redux';
import {modalWindow} from './redux/modal-window/reducer-modal-window';

const store = createStore(
    combineReducers({modalWindow}),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDom.render(
    <Provider store={store}>
        <ProgressList />
    </Provider>,
    document.getElementById('app')
);
