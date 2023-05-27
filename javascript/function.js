//# Function 
// set of code inside a block and it returns some output

//1. Normal function (2015) 
function myFunc(a, b) {
    return a + b
}

// 2. Arrow function (ES6)
const myArrowFunc = (a, b) => a + b

// # concepts of javascript functions

//1. Function Statement
 function myFunc() {

 }
 

//2. Funciton Expression
 const myFunc = function() {

 }


//3. Function Declaration
const myFunc = function() {

 }


//4. Anonymous Function
    setTimeout(() => {}, 100)
    function() { 
    }

//5. Named Function
 function myFunc(){
        
    }

//6. Difference between parameters & arguments
   function myFunc(a, b){ => parameters
        console.log(a, b)
    }

    myFunc(2, 4) => arguments


    function myFunc() {
        console.log("function statement")
    }

    const myFuncEx = function(){
        console.log("function expression")
    }

    console.log(myFunc())
    console.log(myFuncEx())



//7. First Class function
    //a. when we pass a function as parameter is call First Class function
    example=>
    function myFirst() {
        console.log("my first")
    }
     function myFun(myFirst) {
        return myFirst()
    }
    //b. when we return a function inside a function
        function myFun() {
            return function myFirst() {
                console.log("my first")
            }
        }

    //c. when we assign a function to variable, object and array
        
        // variable
        const myFunc = function myFirst() {
                console.log("my first")
            }
            myFunc()

        // Object

            const myObj = {
                name: "amar",
                myFunc: function() {
                console.log("my first")
                }
            }

            myObj.myFunc

        // array

        const myArray = [];
        myArray.push(function myFunc() {
                console.log("my first")
        })
        const myFirst = myArray[0]
        console.log(myFirst())




//8. Difference between Regular function & Arrow function