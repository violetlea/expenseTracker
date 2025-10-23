export default function ValidationMessage (props) {

    const {text} = props;
    
    return (
        <>
            <p className="text-sm text-red-600">{text}</p>
        </>
    )
}