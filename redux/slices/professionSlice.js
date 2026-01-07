import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    types:[]
}

const professionSlice = createSlice({
    name:'loader',
    initialState,
    reducers:{
       getProfessionTypes: (state, action) =>  {
          state.types = action.payload
       }
    }
})
export const { getProfessionTypes } = professionSlice.actions
export const professionState = (state) => state.professions
export default professionSlice.reducer;