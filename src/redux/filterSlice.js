import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    name: '',
    number: '',
  },
  reducers: {
    changeFilterName(state, action) {
      state.name = action.payload;
    },
    changeFilterNumber(state, action) {
      state.number = action.payload;
    },
  },
});

export const { changeFilterName, changeFilterNumber } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
