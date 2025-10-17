import { configureStore } from "@reduxjs/toolkit";
import  categorySlicereducer  from "../features/Categories/categoriesSlice";
import budgetsSlicereducer from "../features/budgets/budgetsSlice";
import transactionsSlicereducer from "../features/transactions/transactionsSlice"

export const store = configureStore ({
    reducer: {
        categories: categorySlicereducer ,
        budgets: budgetsSlicereducer,
        transactions: transactionsSlicereducer

    },
}) 


