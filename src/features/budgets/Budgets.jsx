import { useSelector } from "react-redux";
import { allBudgets } from "./budgetsSlice";
import AddBudget from "../../containers/addBudgetContainer";

export default function Budgets () {

    const loadBudgets = useSelector(allBudgets);

   //console.log(loadBudgets)
    return(
        <>
            {
                loadBudgets.map((budget) => (
                    <AddBudget categoryLabel={budget.Category} remainFunds={budget.Amount} />
                ))
            }
            
        </>
    )

}