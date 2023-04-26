import { configureStore } from "@reduxjs/toolkit";
import { LanguageSlice } from "../Component/slice/LanguageSlice";
import { AnswerSlice } from "../Component/slice/AnswerSlice";
import { InfoSlice } from "../Component/slice/InfoSlice";
import { FinalAnswerSlice } from "../Component/slice/FinalAnswerSlice";


const store = configureStore({
  reducer: {
    language:LanguageSlice.reducer,
    answer:AnswerSlice.reducer,
    information:InfoSlice.reducer,
    finalanswer: FinalAnswerSlice.reducer,
    


  },
})

export default store;
