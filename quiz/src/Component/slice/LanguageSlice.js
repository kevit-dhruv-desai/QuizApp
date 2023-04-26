import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value:""
}

export const LanguageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    
    LanguageChanger: (state, actions) => {
      state.value = actions.payload
    },
  },
})

export const { LanguageChanger } = LanguageSlice.actions

export default LanguageSlice.reducer

