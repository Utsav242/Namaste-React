import {configureStore} from '@reduxjs/toolkit';
import cartReducer from './cartSlice';

const appStore = configureStore({
    reducer: {
cart : cartReducer,
// multiple slices can be added here
// user : userReducer,
    },

});
export default appStore;