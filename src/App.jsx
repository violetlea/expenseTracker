//import { useState } from 'react'
import "./App.css";
import ButtonDef from "./components/Button";
import AddCategory from "./containers/addCategoryContainer";
function App() {
	//const [count, setCount] = useState(0)

	return (
		<>
			<header class="p-1 lg:p-8 md:p-4 sm:p-2 text-center">
				<h1 class="text-sm lg:text-3xl md:text-base ">Expense Tracker</h1>
			</header>
			<div class="flex flex-row-reverse w-sm xl:w-3xl lg:w-lg md:w-md sm:w-xs">
				<div class="ml-2 mr-2">
					<ButtonDef text="Add Category" />
				</div>
				<div>
					<ButtonDef text="Clear All" />
				</div>
			</div>
      <AddCategory />
      
		</>
	);
}

export default App;
