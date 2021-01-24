import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
    },
    reducers: {
        storeItems: (state, action) => {
            state.items = [...action.payload]
        },
    }
})

export const { storeItems } = cartSlice.actions

export default cartSlice.reducer
