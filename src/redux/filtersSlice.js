import { createSlice } from '@reduxjs/toolkit';

export const filtersSlice = createSlice({
  name: 'filters',
  initialState: { name: '' },
  reducers: {
    changeFilter: (state, { payload }) => {
      state.name = payload;
    },
  },
});

export const selectNameFilter = (state) => state.filters.name;
export const filtersReducer = filtersSlice.reducer;
export const { changeFilter } = filtersSlice.actions;
