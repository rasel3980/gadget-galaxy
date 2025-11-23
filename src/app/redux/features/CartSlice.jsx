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
                state.items.push({...product,cartQuantity:1})
            }
        },
        deleteCart: (state,action) => {
            state.items = state.items.filter(p=> p.id !== action.payload)
        },
        incrementQuantity: (state,action)=>{
            const item = state.items.find((p)=> p.id === action.payload);
            if(item){
                item.cartQuantity += 1;
            }
        },
        decrementQuantity: (state,action)=>{
            const item = state.items.find((p)=> p.id === action.payload);
            if(item){
                item.cartQuantity -= 1;
            }
        }
    }


})

export const {addToCart,deleteCart,incrementQuantity,decrementQuantity} = CartSlice.actions
export default CartSlice.reducer;
