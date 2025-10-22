import { createSlice  } from "@reduxjs/toolkit";

const initialState = ["Housing", "Food", "Transportation", "Utilities"];

const categorySlice = createSlice({
	name: "categories",
	initialState: initialState,
	reducers: {
		addCategory: (state, action) => {
			const value = action.payload.charAt(0).toUpperCase()+ action.payload.slice(1);
			state.push(value);
			
		},
		removeCategory: (state, action) => {
			//alert(action.payload)
			return state.filter((category,index) => index !== action.payload)
		},
		clearAllAddedCategories: (state,action) => {
			if(state.length > 3){
				state.splice(4);
			}
			
		}
	},
});


export const allCategories = (state) => state.categories;
export const { addCategory, removeCategory, clearAllAddedCategories} =
	categorySlice.actions;
export default categorySlice.reducer;

