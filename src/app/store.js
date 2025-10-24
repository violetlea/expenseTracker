import { configureStore } from "@reduxjs/toolkit";
//import  categorySlicereducer  from "../features/categories/categoriesSlice";
import budgetsSlicereducer from "../features/budgets/budgetsSlice";
import transactionsSlicereducer from "../features/transactions/transactionsSlice"
import categorySlicereducer from "../features/categories/categoriesSlice";

export const store = configureStore ({
    reducer: {
        categories: categorySlicereducer ,
        budgets: budgetsSlicereducer,
        transactions: transactionsSlicereducer

    },
}) 


