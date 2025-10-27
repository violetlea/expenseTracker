import RoundedDetail from "../components/RoundedDetail";
import { useDispatch } from "react-redux";
import { removeCategory } from "../features/categories/categoriesSlice";
import { removeBudget } from "../features/budgets/budgetsSlice";
import { removeAllRelatedCategory } from "../features/transactions/transactionsSlice";
import { totalBudgets } from "../features/budgets/budgetsSlice";
import { totalTransactions } from "../features/transactions/transactionsSlice";

export default function ManageCategoryList(props) {
	const { allCategories } = props;
	const dispatch = useDispatch();

	const handleRemoveSelectedItem = (index, category) => {
		const payloadRemove = {
			Index: index,
			isClearAll: false,
		};
		dispatch(removeCategory(index));
		dispatch(removeBudget(payloadRemove));
		dispatch(removeAllRelatedCategory(category));
		dispatch(totalBudgets());
		dispatch(totalTransactions());
	};
	return (
		<>
			<div className="grid grid-cols-2 gap-2 ">
				{allCategories.map((category, index) => (
					<RoundedDetail
						text={category}
						index={index}
						key={index}
						handleRemoveAction={() => handleRemoveSelectedItem(index, category)}
					/>
				))}
			</div>
		</>
	);
}
