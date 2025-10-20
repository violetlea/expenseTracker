import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
export let totalTrans = 0;

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
            //use this when user remove the category (budget and transaction will be removed)
            return state.filter((transaction) => transaction.Category !== action.payload); 
        },
        totalTransactions: (state,action) => {
            let currentTotal = 0;
            state.map((transaction) => currentTotal += Number(transaction.Amount));
            totalTrans = currentTotal;
            //alert(totalTrans);

            
        }
       
    }
});

export const allTransactions = (state) => state.transactions;
export const {addTransaction,removeTransaction,removeAllRelatedCategory,totalTransactions} = transactionsSlice.actions;
export default transactionsSlice.reducer;