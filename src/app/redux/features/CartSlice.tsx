import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Product } from './fetchDataSlice';

export interface CartItem extends Product {
  cartQuantity: number; 
  selected?: boolean;   
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
    addToCart: (state, action: PayloadAction<Product>) => {
      const product = action.payload;
      const exist = state.items.find(item => String(item.id) === String(product.id));

      if (exist) {
        exist.cartQuantity += 1;
      } else {
        state.items.push({ ...product, cartQuantity: 1, selected: true });
      }
    },
    deleteCart: (state, action: PayloadAction<string | number>) => {
      state.items = state.items.filter(p => String(p.id) !== String(action.payload));
    },
    incrementQuantity: (state, action: PayloadAction<string | number>) => {
      const item = state.items.find(p => String(p.id) === String(action.payload));
      if (item) {
        item.cartQuantity += 1;
      }
    },
    decrementQuantity: (state, action: PayloadAction<string | number>) => {
      const item = state.items.find(p => String(p.id) === String(action.payload));
      if (item && item.cartQuantity > 1) {
        item.cartQuantity -= 1;
      }
    },
    toggleSelected: (state, action: PayloadAction<string | number>) => {
      const item = state.items.find(p => String(p.id) === String(action.payload));
      if (item) {
        item.selected = !item.selected;
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