import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
}

export const CartSlice = createSlice({
    name:"Cart",
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            const product = action.payload;
            const exist = state.items.find(item=> item.id=== product.id);

            if(exist){
                exist.cartQuantity += 1;
            }
            else{
                state.items.push({...product,quantity:1})
            }
        }
    }


})

export const {addToCart} = CartSlice.actions
export default CartSlice.reducer;
