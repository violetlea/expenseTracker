export default function DropdownDef (props) {

    const {name} = props;

    return(
        <>
            <select name={name} className="border-2 rounded-lg border-white bg-white w-full p-1">
                <option value="Housing">Housing</option>
                <option value="Housing">Housing</option>
                <option value="Housing">Housing</option>
                <option value="Housing">Housing</option>
            </select>
        </>
    );
}