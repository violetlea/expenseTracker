export default function ButtonDef (props) {

    const {text,handleAction,isWhite} = props;

    return(
    <>
        <button className="buttonDef" onClick={handleAction}>{text}</button>
    </>
    );

}