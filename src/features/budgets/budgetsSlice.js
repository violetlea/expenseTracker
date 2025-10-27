import { createSlice } from "@reduxjs/toolkit";

const initialState = [
	{
		Category: "Housing",
		Amount: 0,
		RemainingFunds: 0,
	},
	{
		Category: "Food",
		Amount: 0,
		RemainingFunds: 0,
	},
	{
		Category: "Transportation",
		Amount: 0,
		RemainingFunds: 0,
	},
	{
		Category: "Utilities",
		Amount: 0,
		RemainingFunds: 0,
	},
];

export let totalBudget = 0;
export let isCurrentAmountNull = false;

const budgetsSlice = createSlice({
	name: "budgets",
	initialState: initialState,
	reducers: {
		addBudget: (state, action) => {
			//when user add new category, this reducer will be dispatched
			const category = action.payload;

			const payload = {
				Category: category.charAt(0).toUpperCase() + category.slice(1),
				Amount: 0,
				RemainingFunds: 0,
			};

			state.push(payload);
		},
		editBudget: (state, action) => {
			const selectCategory = state.find(
				(category) => category.Category === action.payload.Category
			);

			if (action.payload.isRemoval) {
				const updatedFunds =
					Number(selectCategory["RemainingFunds"]) +
					Number(action.payload.Amount);
				selectCategory["RemainingFunds"] = updatedFunds;
			} else {
				if (selectCategory["Amount"] !== 0) {
					const newBudget = action.payload.Amount;
					const totalTrans = action.payload.TotalTransaction;
					selectCategory["Amount"] = action.payload.Amount;
					//Number(newBudget) - Number(totalTrans);
					selectCategory["RemainingFunds"] =
						Number(newBudget) - Number(totalTrans);
				} else {
					selectCategory["Amount"] = action.payload.Amount;
					selectCategory["RemainingFunds"] = action.payload.Amount;
				}
			}
			isCurrentAmountNull = false;
		},
		minusBudget: (state, action) => {
			const searchCategory = state.find(
				(category) => category.Category === action.payload.Category
			);
			const remainingFunds =
				searchCategory["RemainingFunds"] - action.payload.Amount;
			searchCategory["RemainingFunds"] = remainingFunds;
		},
		removeBudget: (state, action) => {
			if (action.payload.isClearAll) {
				if (state.length > 3) {
					state.splice(4);
				}
			} else {
				return state.filter((budget, index) => index !== action.payload.Index);
			}
		},
		totalBudgets: (state, action) => {
			let currentTotal = 0;
			state.map((budget) => (currentTotal += Number(budget.Amount)));
			totalBudget = currentTotal;
		},
		clearBudget: (state, action) => {
			state.map((budget) => {
				budget["Amount"] = 0;
				budget["RemainingFunds"] = 0;
			});
		},
		searchBudget: (state, action) => {
			/* checking if the budget already inserted or not when user try to add new
			transaction */
			const insertedCategory = action.payload;
			const findCategory = state.find(
				(budget) => budget.Category === insertedCategory
			);
			const currentAmount = findCategory.Amount;

			if (currentAmount === 0) {
				isCurrentAmountNull = true;
			}
		},
	},
});

export const allBudgets = (state) => state.budgets;
export const {
	addBudget,
	editBudget,
	minusBudget,
	removeBudget,
	totalBudgets,
	clearBudget,
	searchBudget,
} = budgetsSlice.actions;
export default budgetsSlice.reducer;
