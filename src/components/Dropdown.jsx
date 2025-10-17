export default function DropdownDef (props) {

    const {name,dropdownList,selectedValue,handleSelectOnChange} = props;

    return(
        <>
            <select name={name} value={selectedValue} onChange={handleSelectOnChange} className="border-2 rounded-lg border-white bg-white w-full p-1">
                <option value="">Select category</option>
            {
                dropdownList.map((list) => (
                    <option value={list}>{list}</option>
                ))
            }
            </select>
        </>
    );
}