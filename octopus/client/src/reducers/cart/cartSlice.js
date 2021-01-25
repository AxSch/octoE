import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: {},
    },
    reducers: {
        storeItems: (state, action) => {
            if (state.items && Object.values(state.items).length !== 0) {
                const quantity = state.items[action.payload.id].quantity
                state.items = {
                    ...state.items,
                    [action.payload.id]: {
                        ...action.payload,
                        quantity: action.payload.quantity + quantity
                    }
                }

            } else {
                state.items = {
                    ...state.items,
                    [action.payload.id]: {
                        ...action.payload,
                    }
                }
            }
        },
    }
})

export const selectCartItems = state => {
    let numberOfItems = 0
    if (state.cart.items && Object.values(state.cart.items).length !== 0) {
        Object.values(state.cart.items).forEach(item => {
            numberOfItems += item.quantity
        });
    }
    return numberOfItems
}

export const { storeItems } = cartSlice.actions

export default cartSlice.reducer
