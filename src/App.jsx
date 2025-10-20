import { useState } from "react";
import "./App.css";
import ButtonDef from "./components/Button";
import AddCategory from "./containers/addCategoryContainer";
import AddBudget from "./containers/addBudgetContainer";
import ManageTransaction from "./containers/transactionsContainer";
import AddTransaction from "./containers/addTransactionContainer";
import { Categories } from "./features/Categories/Categories";
import Budgets from "./features/budgets/Budgets";
import Transactions from "./features/transactions/Transactions";
function App() {
	const [visible, setVisible] = useState(false);

	const handleSubmitCategory = () => {
		if (visible) {
			setVisible(false);
		} else {
			setVisible(true);
		}
	};

	return (
		<>
			{/* <div >
      <header class="p-1 lg:p-8 md:p-4 sm:p-2 text-center">
				<h1 class="text-sm lg:text-3xl md:text-base ">Expense Tracker</h1>
			</header>
			<div class="flex flex-row-reverse w-sm xl:w-3xl lg:w-lg md:w-md sm:w-xs">
				<div class="ml-2 mr-2">
					<ButtonDef text={visible ? `Close Category` : `Add Category`} handleAction={handleSubmitCategory} />
				</div>
				<div>
					<ButtonDef text="Clear All" />
				</div>
			</div>
      {visible && <AddCategory />}

    </div> */}

			<header className="grid grid-cols-1">
				<div className="p-6 m-4 text-center ">
					<h1 className="text-[#BADFDB] font-bold text-shadow-md text-2xl">
						Expense Tracker
					</h1>
				</div>
			</header>
			<nav>
				<div className="grid grid-cols-1 ">
					<div>
						<ButtonDef text="Clear All" />
						<ButtonDef
							text={visible ? `Close Category` : `Add Category`}
							handleAction={handleSubmitCategory}
						/>
					</div>
				</div>
			</nav>
			<section className="grid grid-cols-1">

				{visible && (
					<div className="bg-amber-200 p-2 md:p-4 justify-items-center border-2 border-black m-2 md:m-4 rounded-xl">
						<div className=" grid grid-cols-1 md:grid-cols-2 gap-2">
							<div className="bg-pink-300">
								<Categories />
							</div>
							<div className="bg-pink-300">
								<AddCategory />
							</div>
						</div>
					</div>
				)}
				<div className=" grid grid-cols-1 md:grid-cols-2 gap-3 p-2 md:p-4 justify-items-center m-2 md:m-4 rounded-xl">
					{/* <AddBudget /> */}
					<Budgets />
					<Transactions />
					{/* <ManageTransaction /> */}
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
