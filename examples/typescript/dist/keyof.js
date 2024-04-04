"use strict";
var scanResult = {
    numberOfVulnerabilities: 1,
    packages: [{ name: "fetch", version: "1.2.3", cve: "2024-1124-223" }],
    priorities: ["high", "low"],
    id: "id_1",
    userScannerId: "2024_3_4",
};
function getScanResultStats(scanResult, key) {
    return scanResult[key];
}
getScanResultStats(scanResult, "priorities");
function filterScans(scans, key, value) {
    if (!Array.isArray(scans))
        return;
    return scans.filter(function (currentScan) { var _a; return ((_a = currentScan[key]) === null || _a === void 0 ? void 0 : _a.toLowerCase()) === value.toLowerCase(); });
}
function filterScansWithOmit(scans, key, value) {
    if (!Array.isArray(scans))
        return;
    return scans.filter(function (currentScan) { var _a; return ((_a = currentScan[key]) === null || _a === void 0 ? void 0 : _a.toLowerCase()) === value.toLowerCase(); });
}
