import TextInput from "../components/Input";
import ButtonDef from "../components/Button";
import { editBudget } from "../features/budgets/budgetsSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useSelector } from "react-redux";
import { allTransactions } from "../features/transactions/transactionsSlice";
import { ConvertToDecimal } from "../helpers/helperFunction";
import { totalBudgets } from "../features/budgets/budgetsSlice";
import ValidationMessage from "../components/ValidationMessage";

export default function AddBudget(props) {
	const { categoryLabel, remainFunds } = props;

	const [amount, setAmount] = useState(0);
	const [message,setMessage] = useState('')
	const dispatch = useDispatch();
	const loadTransactions = useSelector(allTransactions);

	const handleAmount = (event) => {
		setAmount(event.target.value);
	};

	const handleUpdateAmount = (categoryLabel, amount, remainFunds) => {

		if(amount === 0) {
			setMessage('Insert the amount!');
		} 

		if (remainFunds !== 0) {
			const selectedCategory = loadTransactions.filter(
				(transaction) => transaction.Category === categoryLabel
			);

			let total = 0;
			selectedCategory.map(
				(transaction) => (total += Number(transaction.Amount))
			);
			//console.log(total)
			const payloadUpdateFund = {
				Category: categoryLabel,
				Amount: ConvertToDecimal(amount),
				TotalTransaction: ConvertToDecimal(total),
			};
			dispatch(editBudget(payloadUpdateFund));
			setMessage('');
		} else {
			const payload = {
				Category: categoryLabel,
				Amount: ConvertToDecimal(amount),
				isRemoval: false,
			};
			dispatch(editBudget(payload));
			
		}
		dispatch(totalBudgets());

		setAmount(0);
		
	};

	return (
		<>
			<div className="bg-[#E5E5E5] shadow-xl/20 border-2 border-[#BADFDB] rounded-lg p-2 w-full">
				<div className="grid grid-cols-2 gap-2">
					<div>
						<p className="text-sm text-gray-500">Category</p>
						<p className="text-md">{categoryLabel}</p>
						<p>Funds Remaining: {ConvertToDecimal(remainFunds)}</p>
					</div>
					<div>
						{/* to add red line to input if error */}
						<TextInput
							label="Amount"
							type="number"
							value={amount}
							handleOnChange={handleAmount}
						/>

						{message !== '' && <ValidationMessage text={message} />}
						
						<ButtonDef
							text="Update"
							handleAction={() =>
								handleUpdateAmount(categoryLabel, amount, remainFunds)
							}
							typeBtn='primary'
						/>
					</div>
				</div>
			</div>
		</>
	);
}
