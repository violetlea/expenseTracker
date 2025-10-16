import RoundedDetail from "../components/RoundedDetail"
import { useDispatch } from "react-redux";
import { removeCategory } from "../features/Categories/categoriesSlice";
import { removeBudget } from "../features/budgets/budgetsSlice";
import { useState } from "react";

export default function ManageCategoryList (props) {

    const {allCategories} = props;
   // const [listCat,setListCat] = useState(allCategories);
    const dispatch = useDispatch();

    const handleRemoveSelectedItem = (index) => {
        dispatch(removeCategory(index));
        dispatch(removeBudget(index))
       // setListCat(allCategories)
        //alert(category)
    }
    return (
        <>
            {allCategories.map((category,index)=> (
            
                <RoundedDetail text={category} index={index} key={index} 
                handleRemoveAction={() => handleRemoveSelectedItem(index)}/>
               
     
                
                
  
            ))}
            
        </>
    )
}