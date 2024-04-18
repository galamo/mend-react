import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type SettingsGlobalState = {
  userName: string;
  isUTC: boolean;
};

export const initialState = {
  userName: "",
  isUTC: true,
};

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setUserName: (state, action: PayloadAction<string>) => {
      state.userName = action.payload;
    },
    setTimezone: (state) => {
      state.isUTC = !state.isUTC;
    },
  },
});

export const { setUserName, setTimezone } = settingsSlice.actions;
export default settingsSlice.reducer;
