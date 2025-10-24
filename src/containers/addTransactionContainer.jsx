import DropdownDef from "../components/Dropdown";
import TextInput from "../components/Input";
import ButtonDef from "../components/Button";
import { useSelector } from "react-redux";
import { allCategories } from "../features/Categories/categoriesSlice";
import { addTransaction } from "../features/transactions/transactionsSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { minusBudget } from "../features/budgets/budgetsSlice";
import { totalTransactions } from "../features/transactions/transactionsSlice";
import ValidationMessage from "../components/ValidationMessage";
import { searchBudget } from "../features/budgets/budgetsSlice";
import { isCurrentAmountNull } from "../features/budgets/budgetsSlice";

export default function AddTransaction(props) {
	const loadCategory = useSelector(allCategories);
	const dispatch = useDispatch();

	const [desc, setDesc] = useState("");
	const [amount, setAmount] = useState(0);
	const [selectedValue, setSelectedValue] = useState("");
	const [message, setMessage] = useState("");

	const handleSelectedValue = (event) => {
		setSelectedValue(event.target.value);
	};

	const handleDesc = (event) => {
		setDesc(event.target.value);
	};

	const handleAmount = (event) => {
		setAmount(event.target.value);
	};

	const handleSubmitTransaction = (selectedValue, desc, amount) => {
		
		if(selectedValue === "") {
			//alert("please select category!")
			setMessage("Please select category!");
		} else {
			dispatch(searchBudget(selectedValue));
			console.log(isCurrentAmountNull);

			if(isCurrentAmountNull) {
				//alert('insert budget first!')
				setMessage("Insert budget first!");
			
			} else {
				if (amount === 0) {
				setMessage("Insert amount!");
				} else {
					const payloadTrans = {
						Category: selectedValue,
						Description: desc,
						Amount: amount,
					};
					dispatch(addTransaction(payloadTrans));
					const payloadBudget = {
						Category: selectedValue,
						Amount: amount,
					};
					//set dispatch action here
					dispatch(minusBudget(payloadBudget));
					dispatch(totalTransactions());
					setDesc("");
					setAmount(0);
					setSelectedValue("");
					setMessage("");
				}

			}

		}
		

		
		
	};

	return (
		<>
			{/* todo: to add validation */}
			<span className="float-right pr-2 pt-2">
				<button className="cursor-pointer">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="currentColor"
						className="size-7">
						<path
							fillRule="evenodd"
							d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
							clipRule="evenodd"
						/>
					</svg>
				</button>
			</span>
			<div className="p-4 grid grid-cols-3 gap-3">
				<div className="">
					<p className="">Category</p>
					<DropdownDef
						dropdownList={loadCategory}
						selectedValue={selectedValue}
						name="Categories"
						handleSelectOnChange={handleSelectedValue}
					/>
				</div>
				<div className="">
					<p className="">Desc</p>
					<TextInput type="text" value={desc} label="Insert description"
					 handleOnChange={handleDesc} />
				</div>
				<div className="">
					<p className="">Amount</p>
					<TextInput
						type="number"
						value={amount}
						handleOnChange={handleAmount}
					/>
					{message !== "" && <ValidationMessage text={message} />}
				</div>
				
			</div>
			<div className="pl-8 pr-12 pb-4 w-full flex justify-end-safe">
				<ButtonDef
					typeBtn="primary"
					text="+ Transaction"
					handleAction={() =>
						handleSubmitTransaction(selectedValue, desc, amount)
					}
				/>
			</div>
		</>
	);
}
