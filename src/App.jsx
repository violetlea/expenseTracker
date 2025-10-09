import { useState } from "react";
import "./App.css";
import ButtonDef from "./components/Button";
import AddCategory from "./containers/addCategoryContainer";
import AddBudget from "./containers/addBudgetContainer";
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
				<div className="p-6 border-2 m-4 border-black text-center text-2xl">
					<h1>Expense Tracker</h1>
				</div>
			</header>
			<section className="grid grid-cols-1">
				<div className="grid grid-cols-1 gap-3 p-2 justify-items-end">
					<div className="ml-2 mr-2 md:ml-8 md:mr-8">
						<div>
							<ButtonDef text="Clear All" />
							<ButtonDef
								text={visible ? `Close Category` : `Add Category`}
								handleAction={handleSubmitCategory}
							/>
						</div>
					</div>
				</div>

				{visible && (
					<div className="bg-amber-200 p-2 md:p-4 justify-items-center border-2 border-black m-2 md:m-4 rounded-xl">
						<AddCategory />
					</div>
				)}
				<div className=" grid grid-cols-1 md:grid-cols-2 gap-3 p-2 md:p-4 justify-items-center border-2 border-black m-2 md:m-4 rounded-xl">
					<div className="grid grid-cols-1 gap-3 md:grid-cols-2">
						<div className="border-2 border-black w-full">
							<AddBudget />
						</div>
						<div className="border-2 border-black w-full">
							<AddBudget />
						</div>

					</div>
					
					
					<div className="border-2 border-black w-full">budgets</div>
					
				</div>
			</section>
		</>
	);
}

export default App;
