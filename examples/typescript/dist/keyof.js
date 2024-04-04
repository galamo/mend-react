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
