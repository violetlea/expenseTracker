import RoundedDetail from "../components/RoundedDetail"


export default function ManageCategoryList (props) {

    const {allCategories} = props;
    return (
        <>
            {allCategories.map((category)=> (
                <RoundedDetail text={category} index={category.index}/>
            ))}
            
        </>
    )
}