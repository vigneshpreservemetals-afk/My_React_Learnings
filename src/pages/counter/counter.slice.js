
import { createSlice } from "@reduxjs/toolkit";

export const CounterSlice = createSlice(

    {
        name:"Calculator-App",

        initialState:{
            count:0,
        },

        reducers:{

            add:(state,action) => {
                state.count += 1
            },

            sub:(state,action)=> {
                state.count -= 1
            },

            mul:(state,action)=> {
                state.count *= 2
            },

            div:(state,action)=>{
                state.count /= 2
            }

        }
    }
)

export const {add,sub,mul,div} =CounterSlice.actions
export default CounterSlice.reducer