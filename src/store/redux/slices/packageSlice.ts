import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Package {
}

const initialState: Package[] = [];

const packageSlice = createSlice({
  name: "package",
  initialState,
  reducers: {
    addPackage: (state, action: PayloadAction<Package[]>) => {
      return [...state, ...action.payload];
    },
  },
});

export const { addPackage } = packageSlice.actions;
export default packageSlice.reducer;
