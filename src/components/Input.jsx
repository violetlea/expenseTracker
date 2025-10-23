export default function TextInput (props) {
    const {type,label,handleOnChange,value} = props;
    return(
        <>
        <input 
        type={type}
        placeholder={label} 
        onChange={handleOnChange}
        value={value}
        class="border-1 border-gray-400 bg-white w-full max-w-9/10 rounded-l p-0.5 mt-1 mb-1"
        >
        
        </input>
        </>
    )
}