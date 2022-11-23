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
