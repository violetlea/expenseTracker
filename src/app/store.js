import { configureStore } from "@reduxjs/toolkit";
import  categorySlicereducer  from "../features/Categories/categoriesSlice";

export const store = configureStore ({
    reducer: {
        categories: categorySlicereducer 

    },
}) 


