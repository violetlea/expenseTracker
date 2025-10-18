import TextInput from "../components/Input";
import ButtonDef from "../components/Button";
import { editBudget } from "../features/budgets/budgetsSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useSelector } from "react-redux";
import { allTransactions } from "../features/transactions/transactionsSlice";
export default function AddBudget(props) {
	const { categoryLabel, remainFunds } = props;

	const [amount, setAmount] = useState(0);
	const dispatch = useDispatch();
	const loadTransactions = useSelector(allTransactions);

	const handleAmount = (event) => {
		setAmount(event.target.value);
	};

	const handleUpdateAmount = (categoryLabel, amount, remainFunds) => {
		alert(typeof remainFunds);
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
				Amount: amount,
				TotalTransaction: total,
			};
			dispatch(editBudget(payloadUpdateFund));
		} else {
			const payload = {
				Category: categoryLabel,
				Amount: amount,
				isRemoval: false,
			};
			dispatch(editBudget(payload));
		}

		setAmount("");
	};

	return (
		<>
			<div className="grid grid-cols-1 gap-3 md:grid-cols-2">
				<div className="bg-[#E5E5E5] shadow-xl/20 border-2 border-[#BADFDB] rounded-lg p-2 w-full">
					<div className="grid grid-cols-2 gap-2">
						<div>
							<p className="text-sm text-gray-500">Category</p>
							<p className="text-md">{categoryLabel}</p>
							<p>Funds Remaining: {remainFunds}</p>
						</div>
						<div>
							<TextInput
								label="Amount"
								type="number"
								value={amount}
								handleOnChange={handleAmount}
							/>
							<ButtonDef
								text="Update"
								handleAction={() =>
									handleUpdateAmount(categoryLabel, amount, remainFunds)
								}
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
