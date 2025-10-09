export default function TextInput (props) {
    const {label,handleOnChange} = props;
    return(
        <>
        <input 
        type="text"
        placeholder={label} 
        onChange={handleOnChange}
        class="border-1 border-gray-400 w-auto max-w-9/10 rounded-l p-0.5 m-1"
        >
        
        </input>
        </>
    )
}