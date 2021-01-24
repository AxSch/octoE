import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: {},
    },
    reducers: {
        storeItems: (state, action) => {
            state.items = {
                ...state.items,
                [action.payload.id]: action.payload
            }
        },
    }
})

export const { storeItems } = cartSlice.actions

export default cartSlice.reducer
