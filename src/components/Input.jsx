export default function TextInput (props) {
    const {type,label,handleOnChange,value,isError} = props;
    return(
        <>
        <input 
        type={type}
        placeholder={label} 
        onChange={handleOnChange}
        value={value}
        //mt-1 mb-1 border-1 border-gray-400 
        className= {` w-full rounded-md bg-[#EDEDE8] p-0.5 mb-1 focus:outline-2 focus:outline-[#4F3E5E]
                ${
					isError === true && `border-2 border-red-800`
				}`}
        >
        
        </input>
        </>
    )
}