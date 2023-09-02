// src/features/ui/uiSlice.ts

import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    theme: 'light', // Example
  },
  reducers: {
    toggleTheme(state) {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
    },
    // Add other UI related reducers here
  },
});

export const { toggleTheme } = uiSlice.actions;
export default uiSlice.reducer;
