export default function RoundedDetail(props) {
	return (
		<>
			<div className="rounded-lg bg-blue-500 p-2 grid grid-cols-2">
				<div className="h-full">
					<p>300 - Housing '(desc)' </p>
				</div>
				<div className="h-full pt-0.5 md:pt-2 lg:pt-0 align-middle">
					<p className="text-right font-bold  ">X</p>
				</div>
			</div>
		</>
	);
}
