type DaysOfWeek = "Monday" | "Tuesday";
function workingDaysRemote(): DaysOfWeek {
  return "Monday";
}

enum DaysOfWeekRemote {
  Sunday,
}

DaysOfWeekRemote.Sunday;
