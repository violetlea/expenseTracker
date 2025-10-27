export default function DropdownDef(props) {
	const { name, dropdownList, selectedValue, handleSelectOnChange, isError } =
		props;

	return (
		<>
			<select
				name={name}
				value={selectedValue}
				onChange={handleSelectOnChange}
				className={`rounded-md bg-[#EDEDE8] w-full p-1 foucs:outline-2 focus:outline-[#4F3E5E]
                ${isError === true && `border-2 border-red-800`}`}>
				<option value="">Select category</option>
				{dropdownList.map((list, index) => (
					<option value={list} key={index}>
						{list}
					</option>
				))}
			</select>
		</>
	);
}
