import axios from "axios";

/**
 * Issues with callback code:
 * - Difficult to understand for code
 * - Callback hell makes understanding worse
 * - Error handling with try-->catch is complicated
 */

// function sayHelloAfterNSeconds() {
//   setTimeout(() => {
//     const r = Math.random();

//     if (r < 0.5) {
//       console.log("SUCCESS");
//     } else {
//       console.log("ERROR");
//     }
//   }, 3000);
// }

// sayHelloAfterNSeconds();

function promiseCreator(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const r = Math.random();

      if (r < 0.5) {
        resolve("SUCCESS");
      } else {
        reject("ERROR");
      }
    }, time);
  });
}

// Syntax: promiseExample.then().catch().finally();
promiseCreator(1000)
  .then((response) => {
    console.log("P->Response: ", response);
  })
  .catch((error) => {
    console.log("P->Error: ", error);
  })
  .finally(() => {
    console.log("P->finally...");
  });

//async-await syntax
async function promiseInvoker() {
  try {
    const response = await promiseCreator(4000);

    console.log("A->Response: ", response);
  } catch (error) {
    console.log("A->Error: ", error);
  } finally {
    console.log("A->finally...");
  }
}

promiseInvoker();

//Axios usage
const apiURL = "https://run.mocky.io/v3/f69eb611-bf81-4fd4-b628-fe7002016911";

//promise-syntax
axios
  .get(apiURL)
  .then((response) => {
    console.log("P-axios-response: ", response?.data);
  })
  .catch((error) => {
    console.log("P-axios-error: ", error?.message);
  })
  .finally(() => {
    console.log("P-axios Api call is completed");
  });

console.log("========100========");

//async-await syntax

async function axiosGet() {
  try {
    const response1 = await axios.get(apiURL);

    console.log("A-axios-response: ", response1?.data);
  } catch (error) {
    console.log("A-axios-error: ", error?.message);
  } finally {
    console.log("A-axios Api call is completed");
  }
}

axiosGet();
