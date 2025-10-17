import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const transactionsSlice = createSlice({
    name: 'transactions',
    initialState: initialState,
    reducers: {
        addTransaction: (state,action) => {
            
        }
    }
})