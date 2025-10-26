export default function DropdownDef (props) {

    const {name,dropdownList,selectedValue,handleSelectOnChange,isError} = props;

    return(
        <>
            <select name={name} 
            value={selectedValue} 
            onChange={handleSelectOnChange} 
            className= {
                `rounded-md bg-white w-full p-1
                ${
					isError === true && `border-1 border-red-800`
				}`
            }
            >

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