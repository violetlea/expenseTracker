export default function RoundedDetail(props) {

	const {text,handleRemoveAction,index} = props;

	return (
		<>


			<div className="rounded-lg bg-blue-500 p-2 grid grid-cols-2">
				<div className="h-full">
					<p key={index}>{text}</p>
				</div>
				<div className="h-full pt-0.5 md:pt-2 lg:pt-0 align-middle">
					{/* add pointer css to button */}
					<button key={index} className="text-right font-bold" onClick={handleRemoveAction}>X</button>
					
				</div>
			</div>
		</>
	);
}
