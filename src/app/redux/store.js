import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../redux/features/CartSlice.jsx'
import dataReducer from '../redux/features/fetchDataSlice.js'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    data:dataReducer,
  },
})