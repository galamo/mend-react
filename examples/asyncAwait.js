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

async function init() {
  try {
    console.log("init");
    const result = await getDataFromApi(20);
    console.log("after the api call.", result);
    const result2 = await getDataFromApi("this is wrong");
    console.log("after the api call.", result2);
  } catch (error) {
    console.log(error);
  }
}
init();
init();
console.log("Script end");
