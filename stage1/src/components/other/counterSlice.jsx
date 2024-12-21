import { createSlice } from "@reduxjs/toolkit";


const counterSlice = createSlice({
    name:'counter',
    initialState:{count:0},
    reducers:{
        increment:(state) => {
            state.count = state.count + 1;
        },
        decrement:(state) => {
            if(state.count !== 0){
                state.count = state.count -1;
            }
       
            // a = a -1;
        },
        reset:(state) => {
            state.count = 0;
        }
    }
})


export const {increment , decrement , reset} = counterSlice.actions;
export default counterSlice.reducer;