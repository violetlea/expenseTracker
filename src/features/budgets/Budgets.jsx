import { useSelector } from "react-redux";
import { allBudgets } from "./budgetsSlice";
import AddBudget from "../../containers/addBudgetContainer";
import { totalBudget } from "./budgetsSlice";
import { ConvertToDecimal } from "../../helpers/helperFunction";

export default function Budgets() {
	const loadBudgets = useSelector(allBudgets);

	return (
		<>
			<div>
				<div className="grid grid-cols-1 p-2">
					<div className="flex justify-between">
						<p className="text-[#4F3E5E] font-bold">Budgets</p>
						<p className="text-[#4F3E5E] font-bold float-right">
							Total : {ConvertToDecimal(totalBudget)}
						</p>
					</div>
				</div>
				<div className="grid grid-cols-1 gap-3 md:grid-cols-2">
					{loadBudgets.map((budget, index) => (
						<AddBudget
							categoryLabel={budget.Category}
							remainFunds={budget.RemainingFunds}
							budgetAmount={budget.Amount}
							key={index}
						/>
					))}
				</div>
			</div>
		</>
	);
}
