import DropdownDef from "../components/Dropdown";
import TextInput from "../components/Input";
import ButtonDef from "../components/Button";
import { useSelector } from "react-redux";
import { allCategories } from "../features/Categories/categoriesSlice";
import { useState } from "react";

export default function AddTransaction(props) {

	const loadCategory = useSelector(allCategories);

	const [desc,setDesc] = useState('');
	const [amount,setAmount] = useState(0);
	const [selectedValue,setSelectedValue] = useState('');

	const handleSelectedValue = (event) => {
		setSelectedValue(event.target.value);
	}
	
	const handleDesc = (event) => {
		setDesc(event.target.value);
	};

	const handleAmount = (event) => {
		setAmount(event.target.value);
	};

	const handleSubmitTransaction = () => {
		e.preventDefault();
	}


	return (
		<>
			{/* <p className="p-4">Add Transaction</p> */}
			<div className="w-full text-right pr-2">
				<p>Close</p>
			</div>
			<div className="p-4 grid grid-cols-3 gap-3">
				<div className="">
					<p className="">Category</p>
					<DropdownDef 
					dropdownList={loadCategory} 
					selectedValue={selectedValue} 
					name='Categories' 
					handleSelectOnChange={handleSelectedValue}
					/>
					{selectedValue}
				</div>
				<div className="">
					<p className="">Desc</p>
					<TextInput type="text" value={desc} handleOnChange={handleDesc}/>
				</div>
				<div className="">
					<p className="">Amount</p>
					<TextInput type="number" value={amount} handleOnChange={handleAmount}/>
				</div>
                
			</div>
			<div className="pl-4 pb-2 w-full">
                    <ButtonDef isWhite='true' text='+ Transaction' handleAction={handleSubmitTransaction}/>
                </div>
		</>
	);
}
