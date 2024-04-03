import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducer';

const savedData = window.localStorage.getItem('data');
const preloadedState = savedData
    ? JSON.parse(decodeURIComponent(escape(atob(savedData))))
    : {};

const store = configureStore({
    reducer,
    preloadedState,
});

store.subscribe(() => {
    window.localStorage.setItem(
        'data',
        btoa(unescape(encodeURIComponent(JSON.stringify(store.getState()))))
    );
});

export default store;