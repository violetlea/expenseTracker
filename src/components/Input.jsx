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
        className= {` w-full rounded-md bg-white p-0.5 mb-1 
                ${
					isError === true && `border-1 border-red-800`
				}`}
        >
        
        </input>
        </>
    )
}