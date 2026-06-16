

import { createSlice } from "@reduxjs/toolkit";

export const loanpageSlice = createSlice ({
    name:"loan-app",
    initialState : {
    principalAmt: 1000,
    interestRate: 8
},

reducers : {
    calcInterest:(state,action) => {
        state.principalAmt += state.principalAmt * state.interestRate/100
},

interestBy:(state,action) => {
    console.log("state===>",state.principalAmt,"action===>"action.payload)
    sta
}
}
})

export const {calcInterest, interestBy} = loanpageSlice.actions

export default loanpageSlice.reducer