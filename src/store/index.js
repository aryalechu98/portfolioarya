import {configureStore} from '@reduxjs/toolkit'
import toggleSlice from './toggle-slice';

const store=configureStore({
    reducer:{
        toggle:toggleSlice.reducer,
    }
})
export default store;