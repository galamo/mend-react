type ScanResult = {
  numberOfVulnerabilities: number;
  packages: Array<{ name: string; version: string; cve: string }>;
  priorities: Array<string>;
  id: string;
  userScannerId: string;
};

const scanResult: ScanResult = {
  numberOfVulnerabilities: 1,
  packages: [{ name: "fetch", version: "1.2.3", cve: "2024-1124-223" }],
  priorities: ["high", "low"],
  id: "id_1",
  userScannerId: "2024_3_4",
};
function getScanResultStats(
  scanResult: ScanResult,
  key: keyof ScanResult
): any {
  return scanResult[key];
}

getScanResultStats(scanResult, "priorities");

function filterScans(
  scans: Array<ScanResult>,
  key: keyof ScanResult,
  value: string
) {
  if (!Array.isArray(scans)) return;
  return scans.filter(
    (currentScan) =>
      (currentScan[key] as string)?.toLowerCase() === value.toLowerCase()
  );
}

type ScanResultFilter = Omit<
  ScanResult,
  "numberOfVulnerabilities" | "packages" | "priorities"
>;

function filterScansWithOmit(
  scans: Array<ScanResult>,
  key: keyof ScanResultFilter,
  value: string
) {
  if (!Array.isArray(scans)) return;
  return scans.filter(
    (currentScan) => currentScan[key]?.toLowerCase() === value.toLowerCase()
  );
}
