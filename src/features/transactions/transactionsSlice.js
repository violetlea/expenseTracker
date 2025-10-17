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
           // alert(action.payload)
            return state.filter((transaction,index) => index !== action.payload);
        },
        removeAllRelatedCategory: (state,action) => {
            //alert(action.payload);
            return state.filter((transaction) => transaction.Category !== action.payload); 
        }
    }
});

export const allTransactions = (state) => state.transactions;
export const {addTransaction,removeTransaction,removeAllRelatedCategory} = transactionsSlice.actions;
export default transactionsSlice.reducer;