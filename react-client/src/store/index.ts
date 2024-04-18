import { configureStore } from "@reduxjs/toolkit";
import settingsReducers from "./reducers/settingsReducers";

export const store = configureStore({
  reducer: {
    settings: settingsReducers,
    // countries: {},
    // login: {},
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
