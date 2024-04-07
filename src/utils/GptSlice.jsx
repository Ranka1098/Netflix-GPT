import { createSlice } from "@reduxjs/toolkit";

const GptSlice = createSlice({
  name: "Gpt",
  initialState: {
    ShowGpt: false,
  },
  reducers:{
    ToogleGptSearch:(state,action)=>{
    state.ShowGpt = !state.ShowGpt;
    }
}
});

export const{ToogleGptSearch} = GptSlice.actions;
export default GptSlice.reducer;