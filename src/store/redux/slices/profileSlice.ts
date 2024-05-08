import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProfileState {
}

const initialState: ProfileState = {
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    addProfile: (state, action: PayloadAction<any>) => {
      // Update the state with the payload (assuming payload is an object)
      return { ...state, ...action.payload };
    },
    removeProfile: (state) => {
        state = {};
      },
  },
});

export const { addProfile, removeProfile } = profileSlice.actions;
export default profileSlice.reducer;
