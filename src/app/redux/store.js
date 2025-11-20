import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../redux/features/CartSlice.jsx'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
})