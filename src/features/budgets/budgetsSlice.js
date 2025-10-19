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
export let totalBudget = 0;

const budgetsSlice = createSlice({
	name: "budgets",
	initialState: initialState,
	reducers: {
		addBudget: (state, action) => {
			const category = action.payload;
			const payload = {
				Category: category.charAt(0).toUpperCase() + category.slice(1),
				Amount: 0,
			};
			state.push(payload);

			//alert(action.payload)
		},
		editBudget: (state, action) => {
			const selectCategory = state.find(
				(category) => category.Category === action.payload.Category
			);

			if (action.payload.isRemoval) {
				const updatedFunds =
					Number(selectCategory["Amount"]) + Number(action.payload.Amount);
				selectCategory["Amount"] = updatedFunds;
			} else {
				//alert(typeof selectCategory["Amount"]);

				if (selectCategory["Amount"] !== 0) {
					const newBudget = action.payload.Amount;
					const totalTrans = action.payload.TotalTransaction;
					selectCategory["Amount"] = Number(newBudget) - Number(totalTrans);
				} else {
					selectCategory["Amount"] = action.payload.Amount;
				}
			}
		},
		minusBudget: (state, action) => {
			const searchCategory = state.find(
				(category) => category.Category === action.payload.Category
			);
			const remainingFunds = searchCategory["Amount"] - action.payload.Amount;
			searchCategory["Amount"] = remainingFunds;
		},
		removeBudget: (state, action) => {
			
			state.filter((budget, index) => index !== action.payload);
			/*let currentTotal = 0;
			state.map((budget) => currentTotal += Number(budget.Amount));
			totalBudget = currentTotal;  */
			//return newList,totalBudget;

		},
		totalBudgets: (state,action) => {
			let currentTotal = 0;
			state.map((budget) => currentTotal += Number(budget.Amount));
			totalBudget = currentTotal;
			alert(totalBudget)

			//todo: to adjust total budget when category is removed
		}
	},
});
//console.log(initialState);

//export let total = (state) => state.budgets.map((budget) => total += Number(budget.Amount));
export const allBudgets = (state) => state.budgets;
export const { addBudget, editBudget, minusBudget, removeBudget, totalBudgets} =
	budgetsSlice.actions;
export default budgetsSlice.reducer;
