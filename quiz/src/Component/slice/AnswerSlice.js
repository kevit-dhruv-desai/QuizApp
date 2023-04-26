import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  answer:[]
}

export const AnswerSlice = createSlice({
  name: 'answer',
  initialState,
  reducers: {
    
    AnswerShow: (state, actions) => {
      state.answer = actions.payload
    },
  },
})

export const { AnswerShow } = AnswerSlice.actions

export default AnswerSlice.reducer
