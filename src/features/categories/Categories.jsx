import { useSelector } from "react-redux";
import { allCategories } from "./categoriesSlice";
import ManageCategoryList from "../../containers/manageCategoryListContainer";

export const Categories = () => {
	const loadCategories = useSelector(allCategories);

	return (
		<>
			<ManageCategoryList allCategories={loadCategories} />
		</>
	);
};
