import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  finalanswer: {},
};

export const FinalAnswerSlice = createSlice({
  name: "finalanswer",
  initialState,
  reducers: {
    finalanswershow: (state, actions) => {
      state.finalanswer[actions.payload.i] = actions.payload.value;
    },
  },
});

export const { finalanswershow } = FinalAnswerSlice.actions;

export default FinalAnswerSlice.reducer;
