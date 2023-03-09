import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Provider} from "react-redux";

import {App} from './App';
import {setupStore} from "./redux/slice/Store";

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = setupStore();
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);


