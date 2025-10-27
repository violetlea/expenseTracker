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
import { CheckAnySymbolsInNumber } from "../helpers/helperFunction";

export default function AddBudget(props) {
	const { categoryLabel, remainFunds, budgetAmount } = props;

	const [amount, setAmount] = useState("");
	const [message, setMessage] = useState("");
	const [isError, setIsError] = useState(false);
	const dispatch = useDispatch();
	const loadTransactions = useSelector(allTransactions);

	const handleAmount = (event) => {
		setAmount(event.target.value);
	};

	const handleUpdateAmount = (categoryLabel, amount, remainFunds) => {
		let isAnySymbol = CheckAnySymbolsInNumber(amount);
		console.log(isAnySymbol);

		if (Number(amount) === 0) {
			setMessage("Insert amount!");
			setIsError(true);
		} else if (isAnySymbol) {
			setMessage("Whole number only!");
			setIsError(true);
		} else {
			if (remainFunds !== 0) {
				const selectedCategory = loadTransactions.filter(
					(transaction) => transaction.Category === categoryLabel
				);

				let total = 0;
				selectedCategory.map(
					(transaction) => (total += Number(transaction.Amount))
				);
				const payloadUpdateFund = {
					Category: categoryLabel,
					Amount: ConvertToDecimal(amount),
					TotalTransaction: ConvertToDecimal(total),
				};
				dispatch(editBudget(payloadUpdateFund));
				message !== "" && setMessage("");
				isError === true && setIsError(false);
			} else {
				const payload = {
					Category: categoryLabel,
					Amount: ConvertToDecimal(amount),
					isRemoval: false,
				};
				dispatch(editBudget(payload));
				message !== "" && setMessage("");
				isError === true && setIsError(false);
			}
		}
		dispatch(totalBudgets());

		setAmount("");
	};

	return (
		<>
			<div className="bg-[#EBC3DB] border-2 border-[#4F3E5E] rounded-xl p-2 w-full">
				<div className="grid grid-cols-3 gap-2">
					<div className="col-span-2">
						<p className="text-xs text-gray-500">Category</p>
						<p className="text-md textDefault font-semibold">{categoryLabel}</p>
						<p className="text-xs textDefault ">
							Budget: {ConvertToDecimal(budgetAmount)}
						</p>
						<p className="text-xs textDefault">Funds Remaining: </p>
						<p
							className={`text-lg textDefault font-bold ${
								remainFunds < 0 ? `text-red-800` : `text-black`
							}`}>
							{ConvertToDecimal(remainFunds)}
						</p>
					</div>
					<div className="pt-3 pb-2">
						<div className="flex justify-end">
							<TextInput
								label="Amount"
								type="text"
								value={amount}
								handleOnChange={handleAmount}
								isError={isError}
							/>
						</div>
						{message !== "" && <ValidationMessage text={message} />}

						<div className="flex justify-end mt-1">
							<ButtonDef
								text="Update"
								handleAction={() =>
									handleUpdateAmount(categoryLabel, amount, remainFunds)
								}
								typeBtn="primary"
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
