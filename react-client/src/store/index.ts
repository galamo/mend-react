import { configureStore } from "@reduxjs/toolkit";
import settingsReducers from "./reducers/settingsReducers";
import loginReducers from "./reducers/loginReducers";

export const store = configureStore({
  reducer: {
    settings: settingsReducers,
    // countries: {},
    login: loginReducers,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
