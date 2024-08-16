import { configureStore } from "@reduxjs/toolkit";
import profileSlice from "./slices/profileSlice";
import settingSlice from "./slices/settingSlice";
import packageSlice from "./slices/packageSlice";

export const store = configureStore({
    reducer:{
        profile: profileSlice,
        setting: settingSlice,
        package: packageSlice,
    }
})