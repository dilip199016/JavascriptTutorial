// console.log("hey");

// let waitingTime = 10000;

// const callbackFunc = () => {
//   console.log("I am calling after", waitingTime, "ms");
// };
// setTimeout(callbackFunc, waitingTime);

// console.log("code after setTimeOut");

// setTimeout takes two parameter as input , first paramater will  be the  callback func second will  be the
// threhhold
// setTimeout wait till given threshold and once that threshhold(delay) is reach after that it will call the function callback

console.log("hey before setTimeout");

// setTimeout(() => {
//   console.log("hey i am inside timeout");
// }, 0);

// console.log("hey after setTimeout");

const object = {
  name1: "Vishal",
  fullName: function () {
    console.log("hey", this.name1);
    return "hello";
  },
};

// setTimeout(object.fullName(), 1000);
setTimeout(object.fullName, 1000);

// function MysetTimeout(callback, delay) {
//   // //if (delay) {
//   //  callback() // function call this => window
//console.log(data)
//   // }
// }
// MysetTimeout(object.fullName, 1000);

const callMe = (useRanme) => {
  console.log("username", useRanme);
};

const getUserName = () => {
  console.log("username,hey");
  return "vishal";
};

callMe();

// polyfill setTimeout
