export default function DropdownDef (props) {

    const {name,dropdownList} = props;

    return(
        <>
            <select name={name} className="border-2 rounded-lg border-white bg-white w-full p-1">
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