import { createSlice  } from "@reduxjs/toolkit";


const initialState = ["Housing", "Food", "Transportation", "Utilities"];

const categorySlice = createSlice({
	name: "categories",
	initialState: initialState,
	reducers: {
		addCategory: (state, action) => {
			state.push(action.payload);
		},
		removeCategory: (state, action) => {
			//const category = action.payload
			return state.filter((catego) => catego !== action.payload)
			alert(category)
		},
	},
});
//console.log(state.categorySlice);
export const allCategories = (state) => state.categories;
export const { addCategory, removeCategory } =
	categorySlice.actions;
export default categorySlice.reducer;
