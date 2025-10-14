import { useState } from "react";
import "./App.css";
import ButtonDef from "./components/Button";
import AddCategory from "./containers/addCategoryContainer";
import AddBudget from "./containers/addBudgetContainer";
import ManageTransaction from "./containers/transactionsContainer";
import AddTransaction from "./containers/addTransactionContainer";
import { Categories } from "./features/Categories/Categories";
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
	<p>meme</p>
			<header className="grid grid-cols-1">
				<div className="p-6 m-4 text-center ">
					<h1 className="text-[#BADFDB] font-bold text-shadow-md text-2xl">Expense Tracker</h1>
				</div>
			</header>
			<section className="grid grid-cols-1">
				<div className="grid grid-cols-1 gap-3 p-2 justify-items-end">
					<div className="ml-2 mr-2 md:ml-8 md:mr-8">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-3">
							<div className="inline-flex text-left w-full border-2 border-black">
								<p>Target Expense: 0.00</p>
								<p>Actual Expense: 0.00</p>
								<p>Difference: -0.00</p>
							</div>
							<div>
								<ButtonDef text="Clear All" />
								<ButtonDef
								text={visible ? `Close Category` : `Add Category`}
								handleAction={handleSubmitCategory}
								/>

							</div>
							
						</div>
					</div>
				</div>

				{visible && (
					
					<div className="bg-amber-200 p-2 md:p-4 justify-items-center border-2 border-black m-2 md:m-4 rounded-xl">
						<Categories />
						<AddCategory />
					</div>
				)}
				<div className=" grid grid-cols-1 md:grid-cols-2 gap-3 p-2 md:p-4 justify-items-center m-2 md:m-4 rounded-xl">
					<AddBudget />
					<ManageTransaction />
				</div>
			</section>
			<section className=" bg-[#EEEEEE] fixed bottom-0 w-full left-0 z-50">
				<AddTransaction />
			</section>
		</>
	);
}

export default App;
