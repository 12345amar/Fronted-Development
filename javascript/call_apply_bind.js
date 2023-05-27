// call 2015
// apply 2015 
// bind es6


// when we need to borrow some properties from object then we use call, apply & bind






// call
// function greet() {
//     console.log("Hello, " + this.name);
// } 
// const person = {
//     name: "John"
// };
// greet.call(person)



// apply
// function sum(a, b, c) {
//     console.log(this.name, this.city, a + b + c);
//   }
// const myObj = {

//     name: "amar",
//     city: "Noida"
// }
// sum.apply(myObj, [1, 2, 7])

// bind
// function multiply(a, b, c, d) {
//     console.log(this.name, this.city, a + b + c + d);
//   }
//   const myObj = {
  
//       name: "amar",
//       city: "noida"
//   }
//    multiply.bind(myObj, 2, 5, 6, 7)()
  
  