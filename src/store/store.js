
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from'../pages/counter/counter.slice'
import LoanpageReducer from "../pages/loan-calc/LoanPage";



export const store = configureStore(
{
    reducer:{

        counter: counterReducer,
        loanData: LoanpageReducer

    }

}
)
