import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const transactionsSlice = createSlice({
    name: 'transactions',
    initialState: initialState,
    reducers: {
        addTransaction: (state,action) => {
            //alert(action.payload.Category)
            state.push(action.payload);
        },
        removeTransaction: (state,action) => {
            
        }
    }
});

export const allTransactions = (state) => state.transactions;
export const {addTransaction} = transactionsSlice.actions;
export default transactionsSlice.reducer;