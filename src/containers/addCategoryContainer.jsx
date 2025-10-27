import TextInput from "../components/Input";
import ButtonDef from "../components/Button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addCategory } from "../features/categories/categoriesSlice";
import { addBudget } from "../features/budgets/budgetsSlice";
import ValidationMessage from "../components/ValidationMessage";

export default function AddCategory(props) {
	const [textCategory, setTextCategory] = useState("");
	const [message, setMessage] = useState("");
	const [isError, setIsError] = useState(false);

	const dispatch = useDispatch();

	const handleTextOnChange = (event) => {
		setTextCategory(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		if (textCategory === "") {
			setMessage("Insert category!");
			setIsError(true);
		} else {
			dispatch(addCategory(textCategory));
			dispatch(addBudget(textCategory));
			message !== "" && setMessage("");
		}

		setTextCategory("");
		isError === true && setIsError(false);
	};

	return (
		<>
			<p className="textDefault font-bold">Category</p>
			<div>
				<TextInput
					label="Insert Category"
					value={textCategory}
					type="text"
					handleOnChange={handleTextOnChange}
					isError={isError}
				/>
				{message !== "" && <ValidationMessage text={message} />}
				<div className="flex justify-end mt-1">
					<ButtonDef text="Add" typeBtn="primary" handleAction={handleSubmit} />
				</div>
			</div>
		</>
	);
}
