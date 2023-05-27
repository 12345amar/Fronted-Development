// arguments
// function myFunc() {
//     console.log(arguments) ===> it returns an object
// }

// myFunc(2, 4)

// const myFunc = () => {
//     console.log(arguments)
// }

// myFunc(2, 4)

// this (binding)
// console.log(this)

// const myObjReg = {
//     name: "amar",
//     city: "noida",
//     myFunc: function(){
//         console.log("my name is", this.name)
//     }
// }

// const myObjArrow = {
//     name: "amar",
//     city: "noida",
//     myFunc: () => {
//         console.log("my name is", this.name)
//     }
// }

// myObj.myFunc()
// myObjArrow.myFunc()


//# new/constructor

//1. regular function
// function Person(name, age, myFunc) {
//   this.name = name;
//   this.age = age;
//   this.myFunc = myFunc;
// }
// function myFunc() {
//     console.log("Im a function")
// }
// const john = new Person('John', 30, myFunc);
// console.log(john.name); // Output: John
// console.log(john.age); // Output: 30
// console.log(john.myFunc())

// 2. arrow function
// const Person = (name, age) => {
//   this.name = name;
//   this.age = age;
//   this.myFunc = myFunc;
// }

// const john = new Person('John', 30);
// console.log(john.name); // Output: John
// console.log(john.age); // Output: 30