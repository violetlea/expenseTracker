import TextInput from "../components/Input";
import ButtonDef from "../components/Button";

export default function AddBudget(props) {
	return (
		<>
			<div className="grid grid-cols-1 gap-3 md:grid-cols-2">
				<div className="border-2 border-black rounded-lg p-2 w-full">
					<div className="grid grid-cols-2 gap-2">
						<div>
							<p className="text-sm text-gray-500">Category</p>
							<p className="text-md">Housing</p>
							<p>Funds Remaining: 0.00</p>
						</div>
						<div>
							<TextInput label="Amount" type="number" />
							<ButtonDef text="Update" />
						</div>
					</div>
				</div>
				<div className="border-2 border-black w-full rounded-lg p-2 w-full">
					<div className="grid grid-cols-2 gap-2">
						<div>
							<p className="text-sm text-gray-500">Category</p>
							<p className="text-md">Housing</p>
							<p>Funds Remaining: 0.00</p>
						</div>
						<div>
							<TextInput label="Amount" type="number" />
							<ButtonDef text="Update" />
						</div>
					</div>
				</div>
                <div className="border-2 border-black rounded-lg p-2 w-full">
					<div className="grid grid-cols-2 gap-2">
						<div>
							<p className="text-sm text-gray-500">Category</p>
							<p className="text-md">Housing</p>
							<p>Funds Remaining: 0.00</p>
						</div>
						<div>
							<TextInput label="Amount" type="number" />
							<ButtonDef text="Update" />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
