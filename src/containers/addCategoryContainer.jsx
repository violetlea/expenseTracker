import TextInput from "../components/Input";
import ButtonDef from "../components/Button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addCategory } from "../features/Categories/categoriesSlice";
import { addBudget } from "../features/budgets/budgetsSlice";

export default function AddCategory(props) {

	const [textCategory, setTextCategory] = useState('');
	const dispatch = useDispatch();

	const handleSubmit = (event) => {
		event.preventDefault();
		dispatch(addCategory(textCategory));
		dispatch(addBudget(textCategory));

		//add another dispatch addBudget
		setTextCategory('');
		//alert("yes");
	};

	const handleTextOnChange = (event) => {
		setTextCategory(event.target.value);
	}


	return (
		<>
			{/* <div class="border-2 border-black rounded-xl w-sm xl:w-3xl lg:w-lg md:w-md sm:w-xs flex flex-row m-1 md:m-4 justify-center ">
				<div class="p-2 md:p-4 flex flex-wrap ">
                    <div class="border-2 border-black mr-2 md:mr-4 lg:mr-8 size-auto ">
                        <p>Categories</p>
                    </div>
                    <div class="border-2 border-black mr-2 md:mr-4 lg:mr-8 size-auto ">
                        <p>form</p>
                        <p>Category</p>
                        <TextInput label='Category' />
                        <ButtonDef text='Add' handleAction={handleSubmit}/>

                    </div>
				</div>
			</div> */}
			
				
					<p>Category</p>
                    <div>
						{/* fix why the input does not clear */}
                        <TextInput label="Category" value={textCategory} type='text' handleOnChange={handleTextOnChange} />
					    <ButtonDef text="Add" handleAction={handleSubmit} />
                    </div>
					{textCategory}
					
				
			
		</>
	);
}
