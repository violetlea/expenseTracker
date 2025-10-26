import { useState } from "react";
import "./App.css";
import ButtonDef from "./components/Button";
import AddTransaction from "./containers/addTransactionContainer";
import Budgets from "./features/budgets/Budgets";
import Transactions from "./features/transactions/Transactions";
import { useDispatch } from "react-redux";
import { clearBudget } from "./features/budgets/budgetsSlice";
import { totalBudgets } from "./features/budgets/budgetsSlice";
import { clearAllAddedCategories } from "./features/categories/categoriesSlice";
import { removeBudget } from "./features/budgets/budgetsSlice";
import { removeTransaction } from "./features/transactions/transactionsSlice";
import { totalTransactions } from "./features/transactions/transactionsSlice";
import CategoriesModal from "./containers/categoriesModal";
import AlertModal from "./components/AlertModal";
import { totalBudget } from "./features/budgets/budgetsSlice";

function App() {
	const [isOpen, setIsOpen] = useState(false);
	const [isOpenAlert, setOpenAlert] = useState(false);
	const dispatch = useDispatch();

	const svgAdd = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
  					<path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z" clipRule="evenodd" />
					</svg>`;

	const handleSubmitCategory = () => {
		setIsOpen(true);
	};

	const handleClearAll = () => {
		setOpenAlert(true);
	};

	const handleConfirmClearAll = () => {
		const payload = {
			isClearAll: true,
		};
		dispatch(clearBudget());
		dispatch(removeBudget(payload));
		dispatch(clearAllAddedCategories());
		dispatch(totalBudgets());
		dispatch(removeTransaction(payload));
		dispatch(totalTransactions());
		setOpenAlert(false);
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
				<div className="flex justify-center  pr-4 md:pr-8">
					<div className="">
						{/* adjust this */}
						{totalBudget != 0 && (
							<ButtonDef
								text="Clear All"
								typeBtn="primary"
								handleAction={handleClearAll}
							/>
						)}
					</div>
					<div className="">
						<ButtonDef
							text="Manage Category"
							handleAction={handleSubmitCategory}
							typeBtn="primary"
						/>
					</div>
				</div>
				<AlertModal
					isOpen={isOpenAlert}
					onClose={() => setOpenAlert(false)}
					isCloseVisible={false}
					confirmAction={() => handleConfirmClearAll()}
				/>
			</nav>
			<CategoriesModal isOpen={isOpen} onClose={() => setIsOpen(false)} />

			<section className="grid grid-cols-1 scroll-auto">
				<div className=" grid grid-cols-1 md:grid-cols-2 gap-3 p-2 md:p-4 justify-items-center m-2 md:m-4 rounded-xl">
					{/* <AddBudget /> */}
					<Budgets />
					<Transactions />
				</div>
			</section>
			{/*  */}
			<section className="fixed left-0 z-50 bg-[#EEEEEE] bottom-0 w-full ">
				<AddTransaction />
			</section>
			<footer className="flex justify-center p-4  h-48">
				<p className="text-white">Created by violet</p>
			</footer>
		</>
	);
}

export default App;
