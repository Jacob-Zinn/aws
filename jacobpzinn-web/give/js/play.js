`use strict`;

// //_ ES6: Full example_

// const isMomHappy = false;

// console.log("uno")
// // Promise
// const willIGetNewPhone = new Promise(
//     (resolve, reject) => { // fat arrow
//         console.log("inside first promise")
//         if (isMomHappy) {
//             const phone = {
//                 brand: 'Samsung',
//                 color: 'black'
//             };
//             resolve(phone);
//         } else {
//             const reason = new Error('mom is not happy');
//             reject(reason);
//         }

//     }
// );
// console.log("those")

// // 2nd promise
// const showOff = function (phone) {
//     const message = 'Hey friend, I have a new ' +
//                 phone.color + ' ' + phone.brand + ' phone';
//     return Promise.resolve(message);
// };

// // call our promise
// const askMom = function () {
//     console.log("calling first promise")
//     willIGetNewPhone
//         .then(showOff)
//         .then(fulfilled => console.log(fulfilled)) // fat arrow
//         .catch(test => console.log(test.message)); // fat arrow
// };

// console.log("when does this go off")
// askMom();

// // alert(`Escape the \` back-tick character and the ${ 300 * 25}` );

// let wavesAreGood = true;
// const buildingNewPromise = new Promise((resolve, reject) => {
//   if (wavesAreGood) {
//     returnVal = {
//       height: "7-8 feet",
//       wind: "northFacing",
//     };
//     resolve(returnVal);
//   } else {
//     reject(`Not going surfing because the waves aren't good`);
//   }
// });

// const blockingFunction = (wavereport) => {
//   console.log(`showing alert`);
//   alert("It's a great day to go surfing!");
//   Promise.resolve(wavereport);
// };

// const whoDrives = (waveReport) => {
//   console.log(JSON.stringify(waveReport));
//   let randNum = Math.floor(Math.random() * 2);
//   if (randNum) {
//     return Promise.resolve("I drove last time, so you drive this time");
//   } else {
//     return Promise.resolve("Fine, I'll drive");
//   }
// };

// const surfDay = () => {
//   buildingNewPromise
//     .then(blockingFunction)
//     .then(whoDrives)
//     .then((surfTime) => {
//       console.log(surfTime);
//     })
//     .catch((error) => console.log(error.message));
// };

// surfDay();
// console.log(
//   `should get here first, even though it comes after surfDay function`
// );

// function sleep(milliseconds) {
//   const date = Date.now();
//   let currentDate = null;
//   do {
//     currentDate = Date.now();
//   } while (currentDate - date < milliseconds);
// }


let wavesAreGood = true;
const asynPromise = new Promise((resolve, reject) => {
  if (wavesAreGood) {
    returnVal = {
      height: 4,
      wind: "northFacing",
    };
    resolve(returnVal);
  } else {
    reject(`Not going surfing because the waves aren't good`);
  }
});

const blockingAsyncFunction = async (wavereport) => {
  return new Promise((resolve, reject) => {
    console.log(`showing alert`);
    alert("It's a great day to go surfing!");
    if (wavereport.height < 3) {
      reject(`waves aren't big enough`);
    }
    resolve(`finished blocker and wave height = ${wavereport.height}`);
  });
};

const asyncSurfDay = async () => {
  try {
    let waveReport = await asynPromise;
    let blocker = await blockingAsyncFunction(waveReport);

    console.log(waveReport);
    console.log(blocker);
  } catch (error) {
    console.log(error);
  }
};

let start = async () => {
  await asyncSurfDay();
};
start();
console.log(
  `should get here first, even though it comes after asyncSurfDay function`
);
