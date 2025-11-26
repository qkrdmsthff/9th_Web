import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { cartItems } from "../constants/cardItem";

const getTotals = (items: typeof cartItems) => {
    let amount = 0;
    let total = 0;

    items.forEach((item) => {
        const itemAmount = Number(item.amount);
        const itemPrice = Number(item.price);
        
        amount += itemAmount;
        total += itemAmount * itemPrice;
    });

    return { amount, total };
};

const initialTotals = getTotals(cartItems);

const cartSlice = createSlice({
    name: "cart",

    initialState: {
        items: cartItems,
        amount: initialTotals.amount,
        total: initialTotals.total,
    },

    reducers: {
        increase: (state, action: PayloadAction<number | string>) => {
            const item = state.items.find(
                (i: { id: any }) => i.id === action.payload
            );

            if (item) {
                item.amount += 1;
            }
            
            const { amount, total } = getTotals(state.items);
            state.amount = amount;
            state.total = total;
        },

        decrease: (state, action: PayloadAction<number | string>) => {
            const item = state.items.find(
                (i: { id: any }) => i.id === action.payload
            );

            if (item) {
                item.amount -= 1;
                
                if (item.amount === 0) {
                    state.items = state.items.filter(
                        (i: { id: any }) => i.id !== action.payload
                    );
                }
            }
            
            const { amount, total } = getTotals(state.items);
            state.amount = amount;
            state.total = total;
        },
        
        removeItem: (state, action: PayloadAction<number | string>) => {
            state.items = state.items.filter(
                (i: { id: any }) => i.id !== action.payload
            );

            const { amount, total } = getTotals(state.items);
            state.amount = amount;
            state.total = total;
        },
        
        clearCart: (state) => {
            state.items = [];
            state.amount = 0;
            state.total = 0;
        },

        calculateTotals: (state) => {
            const { amount, total } = getTotals(state.items);
            state.amount = amount;
            state.total = total;
        },
    },
});

export const { increase, decrease, removeItem, clearCart, calculateTotals } = cartSlice.actions;

export default cartSlice.reducer;