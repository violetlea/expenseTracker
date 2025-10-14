import { useSelector } from "react-redux"
import { allCategories } from "./categoriesSlice";


export const Categories = () => {
    const loadCategories = useSelector(allCategories);

    return(
        <>
        <ul>
            {loadCategories.map((category) =>
                <li key={category.index}>{category}</li>
            )}

        </ul>
        </>
    )

}