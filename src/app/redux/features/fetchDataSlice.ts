import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export interface Product {
  id: string;
  name: string;
  quantity: number;
  price?: number;
  isPopular?: boolean;
}
interface FetchDataState {
  items: Product[];
  loading: boolean;
  error: string | null;
}
const initialState: FetchDataState = {
  items: [],
  loading: false,
  error: null,
}

export const fetchProducts = createAsyncThunk<Product[]>(
  'products/fetchProducts',
  async () => {
    const res = await axios.get('/data.json');
    return res.data as Product[];
  }
);

const fetchDataSlice = createSlice({
  name: "fetchData",
  initialState,
  reducers: {
    stockReduce: (state, action: PayloadAction<string>) => {
      const item = state.items.find(p => p.id === action.payload);
      if (item && item.quantity > 0) {
        item.quantity -= 1;
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action: PayloadAction<Product[]>) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch products";
      });
  }
});

export const { stockReduce } = fetchDataSlice.actions;
export default fetchDataSlice.reducer;