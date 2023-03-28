import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getIngredients } from '../../utils/api';

console.log(getIngredients);

const initialState = {
    data: [],
    isLoading: false,
    error: null,
}

export const fetchByIngredients = createAsyncThunk(
    'ingredients/fetchByIngredients',
    async (_, { dispatch, getState, rejectWithValue, fulfillWithValue }) => {
        const data = await getIngredients();
        console.log(data);
        if(!data) {
            return rejectWithValue({message: 'Ошибка сервера'});
        }
        return data;
    }
)

export const ingredientSlice = createSlice({
    name: 'ingredients',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchByIngredients.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchByIngredients.fulfilled, (state, action) => {
                state.data = action.payload;
                state.isLoading = false;
            })
            .addCase(fetchByIngredients.rejected, (state, action) => {
                console.log(action);
                state.error = action.payload;
                state.isLoading = false;
            })
    }
})

export default ingredientSlice.reducer;