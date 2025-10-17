import { createSlice } from "@reduxjs/toolkit";
import allCategories from "../Categories/categoriesSlice";
import { useSelector } from "react-redux";
import React, { act } from "react";

/* sample data for budgets slice
 {
    budgets : [
        {
            category: 'Housing',
            amount: 300
        },
        ...
    ]
 }


 
*/


const initialState = [
	{
		Category: "Housing",
		Amount: 0,
	},
	{
		Category: "Food",
		Amount: 0,
	},
	{
		Category: "Transportation",
		Amount: 0,
	},
	{
		Category: "Utilities",
		Amount: 0,
	},
];

const budgetsSlice = createSlice({
	name: "budgets",
	initialState: initialState,
	reducers: {
		addBudget: (state, action) => {
            const category = action.payload;
            const payload = {
                Category: category.charAt(0).toUpperCase()+ category.slice(1),
                Amount: 0
            }
            state.push(payload);
            
            //alert(action.payload)
        },
		editBudget: (state, action) => {
            //alert(action.payload.Category)
            const selectCategory = state.find((category) => category.Category === action.payload.Category);
            //console.log(selectCategory['Category'])
            selectCategory['Amount'] = action.payload.Amount;
            //alert(selectCategory)
        },
        removeBudget: (state,action) => {
            return state.filter((budget,index) => index !== action.payload  )
            
            
        }
	},
});
console.log(initialState);
export const allBudgets = (state) => state.budgets;
export const { addBudget,editBudget, removeBudget } = budgetsSlice.actions;
export default budgetsSlice.reducer;
