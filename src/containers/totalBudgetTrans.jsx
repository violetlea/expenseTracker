import { useState } from "react";
import { allBudgets } from "../features/budgets/budgetsSlice";
import { useSelector } from "react-redux";
import { totalBudget } from "../features/budgets/budgetsSlice";
import { ConvertToDecimal } from "../helpers/helperFunction";


export default function TotalBudgetTrans() {

    let totalAll = 0;
    const handleTotal = (totalBudget) => {
        totalAll = totalBudget;
    }

	console.log();

    
	return (
		<>
			<div className="inline-flex text-left w-full border-2 border-black">
				<p onChange={() => handleTotal(totalBudget)}>Total Budget: {totalAll} </p>
				<p>Total Transaction: 0.00</p>
				<p>Difference: -0.00</p>
			</div>
		</>
	);
}
