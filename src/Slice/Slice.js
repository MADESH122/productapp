import {createSlice} from "@reduxjs/toolkit"

const buttonSlice=createSlice({
    name:"button",
    initialState:{
        value:[]
    },
    reducers:{
        setButtonValue:(state,action)=>{
            state.value.push(action.payload)
        }
    }
})
export const {setButtonValue}=buttonSlice.actions;
export default buttonSlice.reducer;