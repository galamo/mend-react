console.log("Script Start");
function getDataFromApi(packagesLimit) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof packagesLimit !== "number") reject("Wrong input");
      else {
        resolve({
          product: "mend",
          statusScan: { vulnerabilities: 10, packages: "axios", packagesLimit },
        });
      }
    }, 4000);
  });
}

getDataFromApi(10)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

getDataFromApi("this is wrong input")
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
console.log("Script End");
