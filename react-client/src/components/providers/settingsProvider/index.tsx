import React, { createContext, useReducer } from "react";

type SettingsState = {
  isUtc: boolean;
  dispatch?: any;
};

const initialState: SettingsState = {
  isUtc: false,
};

export const SettingsContext = createContext<SettingsState>(initialState);

function settingsReducer(
  state: SettingsState,
  action: { type: string; payload: any }
) {
  switch (action.type) {
    case "SET_TIMEZONE": {
      return { ...state, isUtc: action.payload as boolean };
    }
    default: {
      return state;
    }
  }
}

export default function SettingsProvider({
  children,
}: {
  children: React.ReactElement;
}) {
  const [state, dispatch] = useReducer(settingsReducer, initialState);

  return (
    <>
      <SettingsContext.Provider value={{ ...state, dispatch }}>
        {children}
      </SettingsContext.Provider>
    </>
  );
}
