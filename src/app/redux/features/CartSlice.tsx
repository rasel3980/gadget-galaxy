import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Product } from './fetchDataSlice';
import { RootState } from '../store'; // আপনার স্টোর থেকে RootState ইমপোর্ট করুন

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

// --- সিলেক্টর লজিক এখানে থাকবে ---

// ১. কার্টের সব আইটেম পাওয়ার জন্য
export const selectCartItems = (state: RootState) => state.cart.items;

// ২. শুধুমাত্র সিলেক্ট করা আইটেমগুলোর টোটাল প্রাইস
export const selectTotalPrice = (state: RootState) => 
  state.cart.items
    .filter(item => item.selected)
    .reduce((sum, item) => sum + (item.price * item.cartQuantity), 0)
    .toFixed(2);

// ৩. শুধুমাত্র সিলেক্ট করা আইটেমগুলোর টোটাল সংখ্যা
export const selectTotalQuantity = (state: RootState) => 
  state.cart.items
    .filter(item => item.selected)
    .reduce((sum, item) => sum + item.cartQuantity, 0);

// ৪. কার্ট আইকনে দেখানোর জন্য (সিলেক্টেড হোক বা না হোক) সব আইটেমের সংখ্যা
export const selectCartBadgeCount = (state: RootState) => 
  state.cart.items.reduce((sum, item) => sum + item.cartQuantity, 0);


export const {
  addToCart,
  deleteCart,
  incrementQuantity,
  decrementQuantity,
  toggleSelected
} = CartSlice.actions

export default CartSlice.reducer