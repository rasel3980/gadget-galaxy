import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './features/CartSlice'
import dataReducer from './features/fetchDataSlice'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    data: dataReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch