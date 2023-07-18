// function a() {
//   let firstName = "Vishal";
//   return function b() {
//     console.log(firstName);
//   };
// }

// // const functionValue = a();
// // // functionValue();

// // const functionValue = /);
// // };

// // here functionValue have a function reference

// a()();

// // console.log(functionValue);

// // closure is nothing , it is a function with it lexical scope or environment

// // sum(12)(24)(16) ==> 52

// function sum(a1) {
//   return (a2) => {
//     return (a3) => {
//       return a1 + a2 + a3;
//     };
//   };
// }
// const result = sum(12)(24)(16);
// console.log(result); // 52

function generateOrder() {
  let count = 0;
  return function func() {
    count++;
    return "Total orders = " + count;
  };
}

const func1 = generateOrder();
// here we are creating the reference of the function return by the generateOrder function , so generateOrder execution context will be there in memory until unless we run all the code

func1();
console.log(func1());
console.log(func1());
console.log(func1());
console.log(func1());
console.log(func1());
console.log(func1());
console.log(func1());

// let count = 20;
// const func12 = function func() {
//   count++; ///
//   return "Total orders = " + count;
// };

// func12();
// func12()
// func12()
// func12() //  24

const sum = () => {
  var name = "Vishal";
  name = "sharma";

  return function updateName(firstName) {
    console.log(name);
    name = firstName;
    return name;
  };
};

const setName = sum(); //  data  ='Vishal'

setName("Sudghanshu"); // it will return nam,er
setName("raja");
