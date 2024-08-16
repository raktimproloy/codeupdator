import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SettingState {
}

const initialState: SettingState = {
};

const settingSlice = createSlice({
  name: "setting",
  initialState,
  reducers: {
    addSetting: (state, action: PayloadAction<any>) => {
      // Update the state with the payload (assuming payload is an object)
      return { ...state, ...action.payload };
    },
  },
});

export const { addSetting } = settingSlice.actions;
export default settingSlice.reducer;
