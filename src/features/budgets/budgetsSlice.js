import { createSlice } from "@reduxjs/toolkit";

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
       
            const selectCategory = state.find((category) => category.Category === action.payload.Category);
            selectCategory['Amount'] = action.payload.Amount;
         
        },
        minusBudget: (state,action) => {

        },
        removeBudget: (state,action) => {
            return state.filter((budget,index) => index !== action.payload  )
            
            
        }
	},
});
//console.log(initialState);
export const allBudgets = (state) => state.budgets;
export const { addBudget,editBudget, removeBudget } = budgetsSlice.actions;
export default budgetsSlice.reducer;
