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
    updateProfileProperty: (state, action) => {
      const { key, value } = action.payload;
      // Update the specified property in the state
      state[key] = value;
    },
    removeProfile: (state) => {
      state = {};
    },
  },
});
// Action creator function for updating any property of profile
export const updateProfileProperty = (key:string, value:any) => {
  return {
    type: "profile/updateProfileProperty",
    payload: { key, value },
  };
};

export const { addProfile, removeProfile } = profileSlice.actions;
export default profileSlice.reducer;
