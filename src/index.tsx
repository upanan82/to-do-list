import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import { store } from './store/store';
import { ToDo } from './components/App';

import './style.css';

ReactDOM.render(
    <Provider store={store}>
        <ToDo />
    </Provider>,
    document.getElementById('root') as HTMLElement
);