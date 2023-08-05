import { createSlice } from "@reduxjs/toolkit"

const initialState ={
    loading:true,
    notes:[]
}

const noteSlice = createSlice({
    name:"note",
    initialState,
    reducers:{
        fetchNote:(state,{payload})=>{
           
         state.loading = false;
         state.notes=payload
        }
    }
})
export default noteSlice.reducer
export const noteData = noteSlice.actions
