import { createSlice } from "@reduxjs/toolkit";
import { allCategories } from "../Categories/categoriesSlice";
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

const initialState = allCategories.map((category) => ({
	category: category,
	amount: 0,
}));

const budgetsSlice = createSlice({
	name: "budgets",
	initialState: initialState,
	reducers: {
		editBudget: (state, action) => {},
	},
});
