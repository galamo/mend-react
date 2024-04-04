"use strict";
function workingDaysRemote() {
    return "Monday";
}
var DaysOfWeekRemote;
(function (DaysOfWeekRemote) {
    DaysOfWeekRemote[DaysOfWeekRemote["Sunday"] = 0] = "Sunday";
})(DaysOfWeekRemote || (DaysOfWeekRemote = {}));
DaysOfWeekRemote.Sunday;
