export default function ButtonDef (props) {

    const {text,handleAction} = props;

    return(
    <>
        <button className="buttonDef" onClick={handleAction}>{text}</button>
    </>
    );

}