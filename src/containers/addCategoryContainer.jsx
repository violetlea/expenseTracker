import TextInput from "../components/Input";
import ButtonDef from "../components/Button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addCategory } from "../features/Categories/categoriesSlice";
import { addBudget } from "../features/budgets/budgetsSlice";

export default function AddCategory(props) {
	const [textCategory, setTextCategory] = useState("");
	const dispatch = useDispatch();

	const handleSubmit = (event) => {
		event.preventDefault();
		dispatch(addCategory(textCategory));
		dispatch(addBudget(textCategory));

		//add another dispatch addBudget
		setTextCategory("");
		//alert("yes");
	};

	const handleTextOnChange = (event) => {
		setTextCategory(event.target.value);
	};

	return (
		<>
			<p>Category</p>
			<div>
				<TextInput
					label="Category"
					value={textCategory}
					type="text"
					handleOnChange={handleTextOnChange}
				/>
				<ButtonDef text="Add" handleAction={handleSubmit} />
			</div>
		</>
	);
}
