console.log("Script Start");
function getDataFromApi(cbFn) {
  if (typeof cbFn !== "function") return;
  setTimeout(() => {
    cbFn({
      product: "mend",
      statusScan: { vulnerabilities: 10, packages: "axios" },
    });
  }, 4000);
}

getDataFromApi((asyncResponse) => {
  console.log(asyncResponse.product);
});
getDataFromApi((asyncResponse) => {
  console.log(asyncResponse?.statusScan?.vulnerabilities);
});
console.log("Script End");
