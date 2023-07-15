import {configureStore} from '@reduxjs/toolkit'
import cartSlice from './cartSlice';

// configure store use to initialise store
//   * it accepts slices 
const store =configureStore({
    reducer:{
        cart:cartSlice,
    },
})
export default store;