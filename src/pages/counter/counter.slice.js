
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

            addby10:(state,action)=> {
                state.count += action.payload.input
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

export const {add,addby10,sub,mul,div} =CounterSlice.actions
export default CounterSlice.reducer