import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { GET_PRODUCT } from '../../queries/queries';
import { client } from "../../App";

export const fetchProduct = createAsyncThunk('products/fetchProduct', async (id) => {

    try {
        const response = await client.query({ query: GET_PRODUCT, variables: { id } });
        return response.data.product;
    } 
    catch (error) {
        throw new Error('Failed to fetch product')
    }
})

export const pdpSlice = createSlice({
    name: 'pdpProduct',

    initialState: {
        product: null,
        isLoading: false,
        error: null
    },

    reducers: {
        // productClicked: {
        //     reducer(state, action) {
        //         state.push(action.payload)
        //     }
        // }
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchProduct.pending, (state) => {
                state.isLoading = true;
                state.error = null
            })
            .addCase(fetchProduct.fulfilled, (state, action) => {
                state.isLoading = false;
                state.product = action.payload;
            })
            .addCase(fetchProduct.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            })
    }
})

export const pdpProduct = (state) => state.pdpSlice;

// export const { productClicked } = pdpSlice.actions;

export default pdpSlice.reducer;