import DropdownDef from "../components/Dropdown";
import TextInput from "../components/Input";
import ButtonDef from "../components/Button";

export default function AddTransaction(props) {
	return (
		<>
			<p className="text-white p-4">Add Transaction</p>
			<div className="p-4 grid grid-cols-3 gap-3">
				<div className="border-2 border-white">
					<p className="text-white">Category</p>
					<DropdownDef />
				</div>
				<div className="border-2 border-white">
					<p className="text-white">Desc</p>
					<TextInput type="text" />
				</div>
				<div className="border-2 border-white">
					<p className="text-white">Amount</p>
					<TextInput type="number" />
				</div>
                <div>
                    <ButtonDef isWhite='true' text='+ Transaction'/>
                </div>
			</div>
		</>
	);
}
