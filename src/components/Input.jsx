export default function TextInput (props) {
    const {type,label,handleOnChange} = props;
    return(
        <>
        <input 
        type={type}
        placeholder={label} 
        onChange={handleOnChange}
        class="border-1 border-gray-400 bg-white w-full max-w-9/10 rounded-l p-0.5 m-1"
        >
        
        </input>
        </>
    )
}