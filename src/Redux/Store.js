import {configureStore} from '@reduxjs/toolkit'
import rootReducer from './Slices/rootReducer';
export const Store = configureStore({
    reducer:{
        reducer:rootReducer
    },
});

export default Store;