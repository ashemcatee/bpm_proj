import { configureStore } from '@reduxjs/toolkit';
import reducers from './reducer/reducers.js';

const store = configureStore({
    reducer: {
        songs: reducers
    }
})

export default store