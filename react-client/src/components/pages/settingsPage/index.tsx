import { useContext, useRef } from "react";
import { SettingsContext } from "../../providers/settingsProvider";
import { useAppDispatch } from "../../../store/hooks";
import {
  setUserName,
  setTimezone,
} from "../../../store/reducers/settingsReducers";

export default function SettingsPage() {
  const context = useContext(SettingsContext);
  const inputRef = useRef<HTMLInputElement>(null);
  const appDispatch = useAppDispatch();

  function handleInput() {
    if (inputRef.current?.value) {
      appDispatch(setUserName(inputRef?.current?.value));
    }
  }
  return (
    <>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
      >
        <button
          onClick={() => {
            // context?.dispatch({ type: "SET_TIMEZONE", payload: true });
            appDispatch(setTimezone());
          }}
        >
          UTC
        </button>
        <button
          onClick={() => {
            // context?.dispatch({ type: "SET_TIMEZONE", payload: false });
            appDispatch(setTimezone());
          }}
        >
          Local time
        </button>
      </div>
      <h1>{context.isUtc ? "UTC" : "Local time"}</h1>
      <div>
        <input ref={inputRef} type="text" placeholder="userName" />
        <button
          onClick={() => {
            handleInput();
          }}
        >
          Save user name{" "}
        </button>
      </div>
    </>
  );
}
