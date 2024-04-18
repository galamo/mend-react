import { useContext } from "react";
import { SettingsContext } from "../../providers/settingsProvider";

export default function SettingsPage() {
  const context = useContext(SettingsContext);

  return (
    <>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
      >
        <button
          onClick={() => {
            context?.dispatch({ type: "SET_TIMEZONE", payload: true });
          }}
        >
          UTC
        </button>
        <button
          onClick={() => {
            context?.dispatch({ type: "SET_TIMEZONE", payload: false });
          }}
        >
          Local time
        </button>
      </div>
      <h1>{context.isUtc ? "UTC" : "Local time"}</h1>
    </>
  );
}
