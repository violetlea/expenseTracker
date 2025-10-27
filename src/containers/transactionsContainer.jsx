import RoundedDetail from "../components/RoundedDetail";
import { useSelector } from "react-redux";
import { allTransactions } from "../features/transactions/transactionsSlice";
import { useDispatch } from "react-redux";
import { removeTransaction } from "../features/transactions/transactionsSlice";
import { editBudget } from "../features/budgets/budgetsSlice";
import { ConvertToDecimal } from "../helpers/helperFunction";
import { totalTransactions } from "../features/transactions/transactionsSlice";

export default function ManageTransaction() {
	const loadTransactions = useSelector(allTransactions);
	const dispatch = useDispatch();

	const handleRemoveItem = (index, transaction) => {
		const payload = {
			Index: index,
			isClearAll: false,
		};
		dispatch(removeTransaction(payload));
		const payloadForRemoval = {
			Category: transaction.Category,
			Amount: ConvertToDecimal(transaction.Amount),
			isRemoval: true,
		};
		dispatch(totalTransactions());
		dispatch(editBudget(payloadForRemoval));
	};

	return (
		<>
			{loadTransactions.map((transaction, index) => (
				<RoundedDetail
					text={`${transaction.Category} 
                            - (${transaction.Description}) - ${ConvertToDecimal(
						transaction.Amount
					)}`}
					key={index}
					handleRemoveAction={() => handleRemoveItem(index, transaction)}
				/>
			))}
		</>
	);
}
