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
                exist.quantity += 1;
            }
            else{
                state.items.push({...product,quantity:1})
            }
        },
        deleteCart: (state,action) => {
            state.items = state.items.filter(p=> p.id !== action.payload)
        },
        incrementQuantity: (state,action)=>{
            const item = state.items.find((p)=> p.id === action.payload);
            if(item){
                item.quantity += 1;
            }
        },
        decrementQuantity: (state,action)=>{
            const item = state.items.find((p)=> p.id === action.payload);
            if(item){
                item.quantity -= 1;
            }
        }
    }


})

export const {addToCart,deleteCart,incrementQuantity,decrementQuantity} = CartSlice.actions
export default CartSlice.reducer;
