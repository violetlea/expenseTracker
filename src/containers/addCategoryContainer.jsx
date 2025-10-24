import TextInput from "../components/Input";
import ButtonDef from "../components/Button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addCategory } from "../features/Categories/categoriesSlice";
import { addBudget } from "../features/budgets/budgetsSlice";
import ValidationMessage from "../components/ValidationMessage";

export default function AddCategory(props) {
	const [textCategory, setTextCategory] = useState("");
	const [message, setMessage] = useState("");
	
	const dispatch = useDispatch();

	const handleTextOnChange = (event) => {
		setTextCategory(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		if(textCategory === ""){
			setMessage("Insert category!")
		} else {
			dispatch(addCategory(textCategory));
			dispatch(addBudget(textCategory));
			message !== "" &&  setMessage("");
		}

		//add another dispatch addBudget
		setTextCategory("");
		//alert("yes");
	};

	

	return (
		<>
			<p>Category</p>
			<div>
				<TextInput
					label="Insert Category"
					value={textCategory}
					type="text"
					handleOnChange={handleTextOnChange}
				/>
				{message !== "" &&<ValidationMessage text={message} />}
				<div className="flex justify-end">
					<ButtonDef text="Add" typeBtn='primary' handleAction={handleSubmit} />
				</div>
				
			</div>
		</>
	);
}
