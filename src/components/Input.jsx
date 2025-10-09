export default function TextInput (props) {
    const {label,handleOnChange} = props;
    return(
        <>
        <input 
        type="text"
        label={label} 
        onChange={handleOnChange}
        class="border-2 border-gray-400 m-2"
        >
        
        </input>
        </>
    )
}