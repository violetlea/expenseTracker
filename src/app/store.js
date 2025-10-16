import { configureStore } from "@reduxjs/toolkit";
import  categorySlicereducer  from "../features/Categories/categoriesSlice";
import budgetsSlicereducer from "../features/budgets/budgetsSlice";

export const store = configureStore ({
    reducer: {
        categories: categorySlicereducer ,
        budgets: budgetsSlicereducer

    },
}) 


