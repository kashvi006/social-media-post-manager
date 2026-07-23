import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedPlatform: "All",
};

const platformSlice = createSlice({
  name: "platforms",
  initialState,
  reducers: {
    setPlatform: (state, action) => {
      state.selectedPlatform = action.payload;
    },
  },
});

export const { setPlatform } = platformSlice.actions;
export default platformSlice.reducer;