export default function ButtonDef(props) {
	const { text, handleAction, typeBtn } = props;

	return (
		<>
			<button
				className={`buttonDef ${
					typeBtn === "primary" ? `primaryBtn` : `secondaryBtn`
				}`}
				onClick={handleAction}>
				{text}
			</button>
		</>
	);
}
