import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from './store'


interface State{
    inputText:any,
}
export const wholeSlice=createSlice({
    name: "wholesale",
    initialState:{
        inputText:[]
    },
    reducers:{
        handleText:(state,action:PayloadAction<any>)=>{
        
            state.inputText=action.payload.ind
        }
    }
})
export const  {handleText}=wholeSlice.actions
export const selectInp = (state: RootState) => state.text.inputText

export default wholeSlice.reducer