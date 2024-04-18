import { useContext } from "react";
import { SettingsContext } from "../../providers/settingsProvider";

export function ApplicationDate(props: { date: string }) {
  const context = useContext(SettingsContext);
  const d = new Date(props.date);
  return <span> {context.isUtc ? d.toISOString() : d.toLocaleString()} </span>;
}
