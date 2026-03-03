import { createSlice, PayloadAction } from '@reduxjs/toolkit'


export interface CartItem {
  id: string
  name: string
  price: number
  quantity: number        
  cartQuantity?: number 
  selected?: boolean    
  [key: string]: any     
}


interface CartState {
  items: CartItem[]
}


const initialState: CartState = {
  items: [],
}

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const product = action.payload
      const exist = state.items.find(item => item.id === product.id)

      if (exist) {
        exist.cartQuantity = (exist.cartQuantity || 0) + 1
        exist.quantity -= 1
      } else {
        state.items.push({ ...product, cartQuantity: 1 })
      }
    },
    deleteCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(p => p.id !== action.payload)
    },
    incrementQuantity: (state, action: PayloadAction<string>) => {
      const item = state.items.find(p => p.id === action.payload)
      if (item) {
        item.cartQuantity = (item.cartQuantity || 0) + 1
      }
    },
    decrementQuantity: (state, action: PayloadAction<string>) => {
      const item = state.items.find(p => p.id === action.payload)
      if (item && item.cartQuantity && item.cartQuantity > 0) {
        item.cartQuantity -= 1
      }
    },
    toggleSelected: (state, action: PayloadAction<string>) => {
      const item = state.items.find(p => p.id === action.payload)
      if (item) {
        item.selected = !item.selected
      }
    },
  }
})

export const {
  addToCart,
  deleteCart,
  incrementQuantity,
  decrementQuantity,
  toggleSelected
} = CartSlice.actions

export default CartSlice.reducer