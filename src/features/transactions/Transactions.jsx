import { useSelector } from "react-redux";
import { allTransactions } from "./transactionsSlice";
import RoundedDetail from "../../components/RoundedDetail";
import ManageTransaction from "../../containers/transactionsContainer";
import { totalTrans } from "./transactionsSlice";
import { ConvertToDecimal } from "../../helpers/helperFunction";

export default function Transactions() {
	const loadTransactions = useSelector(allTransactions);
	return (
		<>
			<div className="w-full">
				<div className="grid grid-cols-1 p-2 ">
					<div className="flex justify-between">
						<p className="textDefault font-bold">Transactions</p>
						<p className="textDefault font-bold float-right">
							Total : {ConvertToDecimal(totalTrans)}{" "}
						</p>
					</div>
				</div>

				{totalTrans === 0 ? (
					<div className="p-2">
						<p className="text-center italic textDefault">
							No transactions added yet... update your budget and add now!
						</p>
					</div>
				) : (
					<div className="grid grid-cols-1 gap-3 md:grid-cols-2">
						<ManageTransaction />
					</div>
				)}
			</div>
		</>
	);
}
