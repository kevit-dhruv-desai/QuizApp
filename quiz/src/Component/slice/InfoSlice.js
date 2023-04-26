import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  nameValue: "",
  surnameValue: "",
};

export const InfoSlice = createSlice({
  name: "info",
  initialState,
  reducers: {
    NameShow: (state, actions) => {
      state.nameValue = actions.payload;
    },

    SurnameShow: (state, actions) => {
      state.surnameValue = actions.payload;
    },
  },
});

export const { NameShow, SurnameShow } = InfoSlice.actions;

export default InfoSlice.reducer;
