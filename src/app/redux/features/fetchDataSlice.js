import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    items:[],
    loading:false,
    error:null,
}

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async () =>{
        const res = await axios.get('/data.json');
        return res.data
    }
)

const fetchDataSlice = createSlice({
    name:"fetchData",
    initialState,
    extraReducers: (builder)=>{
        builder.addCase(fetchProducts.pending,(state)=>{
            state.loading = true;
        })
        .addCase(fetchProducts.fulfilled,(state,action)=>{
            state.loading = false;
            state.items = action.payload;
        })
        .addCase(fetchProducts.rejected,(state,action)=>{
            state.loading = false;
            state.error = "Field to fetch products "
        })
    }
})

export default fetchDataSlice.reducer;