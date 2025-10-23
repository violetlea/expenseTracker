import { useState } from "react";
import "./App.css";
import ButtonDef from "./components/Button";
import AddCategory from "./containers/addCategoryContainer";
import AddTransaction from "./containers/addTransactionContainer";
import { Categories } from "./features/Categories/Categories";
import Budgets from "./features/budgets/Budgets";
import Transactions from "./features/transactions/Transactions";
import { useDispatch } from "react-redux";
import { clearBudget } from "./features/budgets/budgetsSlice";
import { totalBudgets } from "./features/budgets/budgetsSlice";
import { clearAllAddedCategories } from "./features/Categories/categoriesSlice";
import { removeBudget } from "./features/budgets/budgetsSlice";
import { removeTransaction } from "./features/transactions/transactionsSlice";
import { totalTransactions } from "./features/transactions/transactionsSlice";
import CategoriesModal from "./containers/categoriesModal";

function App() {
	
	const [isOpen, setIsOpen] = useState(false);

	const dispatch = useDispatch();

	const handleSubmitCategory = () => {
		setIsOpen(true);
	};

	const handleClearAll = () => {
		// todo: to add confirm message before clear all (popup)

		const payload = {
			isClearAll: true,
		};
		dispatch(clearBudget());
		dispatch(removeBudget(payload));
		dispatch(clearAllAddedCategories());
		dispatch(totalBudgets());
		dispatch(removeTransaction(payload));
		dispatch(totalTransactions());
	};

	return (
		<>
			<header className="grid grid-cols-1">
				<div className="p-6 m-4 text-center ">
					<h1 className="text-[#BADFDB] font-bold text-shadow-md text-2xl">
						Expense Tracker
					</h1>
				</div>
			</header>
			<nav>
				<div className="grid grid-cols-1 justify-items-end pr-4 md:pr-8">
					<div>
						<ButtonDef text="Clear All" handleAction={handleClearAll} />
						<ButtonDef
							text="Add Category"
							handleAction={handleSubmitCategory}
						/>
					</div>
				</div>
			</nav>
			<CategoriesModal isOpen={isOpen} onClose={() => setIsOpen(false)} />

			<section className="grid grid-cols-1">
				<div className=" grid grid-cols-1 md:grid-cols-2 gap-3 p-2 md:p-4 justify-items-center m-2 md:m-4 rounded-xl">
					{/* <AddBudget /> */}
					<Budgets />
					<Transactions />
				</div>
			</section>
			{/* fixed left-0 z-50 */}
			<section className=" bg-[#EEEEEE] bottom-0 w-full ">
				<AddTransaction />
			</section>
			<footer>
				<p>Created by violet</p>
			</footer>
		</>
	);
}

export default App;
