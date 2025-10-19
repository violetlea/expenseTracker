import { useSelector } from "react-redux";
import { allBudgets } from "./budgetsSlice";
import AddBudget from "../../containers/addBudgetContainer";
import { totalBudget } from "./budgetsSlice";
import { ConvertToDecimal } from "../../helpers/helperFunction";

export default function Budgets() {
	const loadBudgets = useSelector(allBudgets);

	//console.log(loadBudgets)
	return (
		<>
			<div>
				<div className="grid grid-cols-1 p-2">
					<div className="flex justify-between">
						<p className="text-white">Budgets</p>
						<p className="text-white float-right">Total : {ConvertToDecimal(totalBudget) }</p>
					</div>
				</div>
				<div className="grid grid-cols-1 gap-3 md:grid-cols-2">
					{loadBudgets.map((budget) => (
						<AddBudget
							categoryLabel={budget.Category}
							remainFunds={budget.Amount}
						/>
					))}
				</div>
			</div>
		</>
	);
}
