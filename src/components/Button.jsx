export default function Button (props) {

    const {text} = props;

    return(
    <>
        <button className="buttonDef">{text}</button>
    </>
    );

}