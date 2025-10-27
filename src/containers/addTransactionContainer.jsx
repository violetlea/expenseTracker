import DropdownDef from "../components/Dropdown";
import TextInput from "../components/Input";
import ButtonDef from "../components/Button";
import { useSelector } from "react-redux";
import { allCategories } from "../features/categories/categoriesSlice";
import { addTransaction } from "../features/transactions/transactionsSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { minusBudget } from "../features/budgets/budgetsSlice";
import { totalTransactions } from "../features/transactions/transactionsSlice";
import ValidationMessage from "../components/ValidationMessage";
import { searchBudget } from "../features/budgets/budgetsSlice";
import { isCurrentAmountNull } from "../features/budgets/budgetsSlice";
import { CheckAnySymbolsInNumber } from "../helpers/helperFunction";
export default function AddTransaction(props) {
	const loadCategory = useSelector(allCategories);
	const dispatch = useDispatch(); 

	const [desc, setDesc] = useState("");
	const [amount, setAmount] = useState("");
	const [selectedValue, setSelectedValue] = useState("");
	const [messageAmount, setMessageAmount] = useState("");
	const [messageCategory, setMessageCategory] = useState("");
	//const [isVisible,setIsVisible] = useState(true);
	const [isError, setIsError] = useState(false);

	const handleSelectedValue = (event) => {
		setSelectedValue(event.target.value);
	};

	const handleDesc = (event) => {
		setDesc(event.target.value);
	};

	const handleAmount = (event) => {
		setAmount(event.target.value);
	};

	/* const handleVisibleContainer = () => {
		setIsVisible(false);
	} */

	const handleSubmitTransaction = (selectedValue, desc, amount) => {
		let isAnySymbol = CheckAnySymbolsInNumber(amount);

		if (selectedValue === "") {
			//alert("please select category!")
			setMessageCategory("Please select category!");
			setIsError(true);
		} else if (isAnySymbol) {
			setMessageAmount("Whole number only!");
			setIsError(true);
		} else if (Number(amount) === 0) {
			setMessageAmount("Insert amount!");
			setIsError(true);
		} else {
			dispatch(searchBudget(selectedValue));
			console.log(isCurrentAmountNull);

			if (isCurrentAmountNull) {
				//alert('insert budget first!')
				setMessageAmount("Insert budget first!");
				setIsError(true);
			} else {
				if (amount === 0) {
					setMessageAmount("Insert amount!");
					setIsError(true);
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
					setAmount("");
					setSelectedValue("");
					messageAmount !== "" && setMessageAmount("");
					messageCategory !== "" && setMessageCategory("");
					isError === true && setIsError(false);
				}
			}
		}
	};

	return (
		<>
			<div className="p-4 grid grid-cols-3 gap-3">
				<div className="">
					<p className="textDefault font-bold">Category</p>
					<DropdownDef
						dropdownList={loadCategory}
						selectedValue={selectedValue}
						name="Categories"
						handleSelectOnChange={handleSelectedValue}
						isError={isError}
					/>
					{messageCategory !== "" && (
						<ValidationMessage text={messageCategory} />
					)}
				</div>
				<div className="">
					<p className="textDefault font-bold">Description</p>
					<TextInput
						type="text"
						value={desc}
						label="Insert description"
						handleOnChange={handleDesc}
					/>
				</div>
				<div className="">
					<p className="textDefault font-bold">Amount</p>
					<TextInput
						type="text"
						label="Insert Amount"
						value={amount}
						handleOnChange={handleAmount}
						isError={isError}
					/>
					{messageAmount !== "" && <ValidationMessage text={messageAmount} />}
				</div>
			</div>
			<div className="pl-8 pr-4 md:pr-12 pb-4 w-full flex justify-end-safe">
				<ButtonDef
					typeBtn="primary"
					text="Add Transaction"
					handleAction={() =>
						handleSubmitTransaction(selectedValue, desc, amount)
					}
				/>
			</div>
		</>
	);
}
