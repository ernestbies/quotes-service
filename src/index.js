import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import i18next from "i18next";
import {I18nextProvider} from 'react-i18next';
import common_en from './translations/en.json';
import common_pl from './translations/pl.json';
import {Provider} from 'react-redux';
import store from './store/store';

i18next.init({
    interpolation: {escapeValue: false},
    lng: localStorage.getItem('language') ?? 'en',
    resources: {
        en: {
            common: common_en
        },
        pl: {
            common: common_pl
        },
    },
});

ReactDOM.render(
    <Provider store={store}>
        <I18nextProvider i18n={i18next}>
            <App />
        </I18nextProvider>
    </Provider>,
document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
