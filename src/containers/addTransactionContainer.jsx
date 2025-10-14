import DropdownDef from "../components/Dropdown";
import TextInput from "../components/Input";
import ButtonDef from "../components/Button";

export default function AddTransaction(props) {
	return (
		<>
			{/* <p className="p-4">Add Transaction</p> */}
			<div className="w-full text-right pr-2">
				<p>Close</p>
			</div>
			<div className="p-4 grid grid-cols-3 gap-3">
				<div className="">
					<p className="">Category</p>
					<DropdownDef />
				</div>
				<div className="">
					<p className="">Desc</p>
					<TextInput type="text" />
				</div>
				<div className="">
					<p className="">Amount</p>
					<TextInput type="number" />
				</div>
                
			</div>
			<div className="pl-4 pb-2 w-full">
                    <ButtonDef isWhite='true' text='+ Transaction'/>
                </div>
		</>
	);
}
