import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search:"",
};

const utilitySlice = createSlice({
  name: "utility",
  initialState,
  reducers: {
    
    setGlobalSearch: (state, action) => {
        state.search=action.payload;
        console.log("payload",action.payload)
        console.log("state",state.search)
      },
    
  },
});

export const { setGlobalSearch } = utilitySlice.actions;

export default utilitySlice.reducer;