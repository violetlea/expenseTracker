export default function TextInput (props) {
    const {type,label,handleOnChange,value} = props;
    return(
        <>
        <input 
        type={type}
        placeholder={label} 
        onChange={handleOnChange}
        value={value}
        //mt-1 mb-1 border-1 border-gray-400 
        class=" w-full rounded-md bg-white p-0.5 mb-1"
        >
        
        </input>
        </>
    )
}