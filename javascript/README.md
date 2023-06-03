# Event Loop/JS Engine Architecture/Javascript Run Environment

1. Call stack queue
    a. Memory allocation/Memory heap
    b. Global Context Execution
=> Call stack queue is responsible for executing JavaScript soruce code in synchronous way, it executes JavaScript top to bttom in real time(very quick). it allocates memory to each variable & function & properties. and create global context execution.

2. Web Browser API
=> if it gets any web browser api then it executes and delete everything from callback queue container but web api will response to callback queue.


3. Callback queue
    a. Microtask queue
    b. Macrotask queue
=> callback queue takes task from Web Browsers if Web Broswer complete the task and also defferentiat task priority and pull accordingly into microtask queue or may macrotask queue.
    a. microtask takes only high priority task
    b. macrotask queue takes only low priority task
4. Event Loop 
    It checks callstack container if container is empty then check callback queue and if it gets any task in callback queue then it assign to call stack.

# examples
 console.log("Starting")
 setTimeout(() => console.log("Second console"), 0);
 Promise.resolve().then(() =>console.log("third console"))
 console.log("ending")

# output==>
 Starting
 ending
 third console
 second console

# What is JavaScript
    1. High level Language
    2. interpreted programming languages
    3. primarly client side programming languages/scripting langauge
    4. server side language also(NodeJS)
    5. manipulate html & css
    6. real time changes

# install JS engine in our machine (mac/window) Nodejs => v8 
 1. install nodejs in our machine 
 2. check nodejs version using `node -v` command
    if nodejs installed it returns v18.19.1 (version of nodejs)
 3. we can run javacript code using `node` command
 4. we can run javascript file using `node filename_with_path` 

# Some js engine in browsers
1. V8 – Open-source JavaScript Engine developed by Google for Chrome
2. SpiderMonkey – The JavaScript Engine powering Mozilla Firefox
3. JavaScriptCore – Open-source JavaScript Engine developed by Apple for Safari
4. Rhino – Open-source JavaScript Engine managed by Mozilla foundation for FireFox
5. Chakra – A JavaScript Engine for Microsoft Edge
6. JerryScript – A JavaScript engine for the Internet of Things (Iot).


# What is variable
=> It's space in a memory. 
# Type of variable
1. var (use before 2015)
2. let (es6)
3. const (es6)

1. global scope => var
=> var works globally, it can intialize anywhere and use anywhere
2. block scope => let const
=> let & const works only block scope which is inside {} scope
=> let can reassign value  inside of block but const can not reassign value
=> when we use object & array we can change and reassign in const object & array value


# Data Types (Primitive)

    =>Primitive
    1. String
    2. Number
    3. Bigint
    4. Boolean
    5. Undefined
    6. Null
    7. Symbol(Assignment)
    8. Object
    =>Non-Primitive
    1. An object
    2. An array
    3. A date

# Types of JavaScript Operators
There are different types of JavaScript operators:

1. Arithmetic Operators
2. Assignment Operators
3. Comparison Operators
4. String Operators
5. Logical Operators
6. Bitwise Operators
7. Ternary Operators
8. Type Operators

# Conditions & Statements
1. If else conditionals  
2. If else ladder  
3. Switch case  
4. Ternary Operator  
# Looping
1. For Loops  
    a. for (Use for array)
    for (let i = 0; i < 10; i++) {
        console.log(i)
    }
    output=> 0 1 2 3 4 5 6 7 8 9

    b. for in (Use for object)
    const myObj = {fname: "amar", lname : "singh", city: "noida"}
    for (key in myObj) {
        console.log("my key: " + key)
        console.log(myObj[key])
    }
    c. for of (Use for array)
    const myArray = ['amar', 'singh', 'noida']
    for (value of myArray) {
        console.log("my value: " + value)
    }
    d. forEach()

   const myArray = ['amar', 'singh', 'noida']
   const outPut = myArray.forEach((index, value) => {
    console.log(index, value)
    return value
   })
   console.log(outPut)
2. While Loop
    a. while
    b. do while

# Function 
set of code inside a block and it returns some output

1. Normal function (2015) 
function myFunc(a, b) {
    return a + b
}
2. Arrow function (ES6)
const myArrowFunc = (a, b) => a + b

# concepts of javascript functions
1. Function Statement
 function myFunc() {

 }
 

2. Funciton Expression
 const myFunc = function() {

 }


3. Function Declaration
const myFunc = function() {

 }


4. Anonymous Function
    setTimeout(() => {}, 100)
    function(){ 

    }
5. Named Function
 function myFunc(){
        
    }
6. Difference between parameters & arguments
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



7. First Class function
    a. when we pass a function as parameter is call First Class function
    example=>
    function myFirst() {
        console.log("my first")
    }
     function myFun(myFirst) {
        return myFirst()
    }
    b. when we return a function inside a function
        function myFun() {
            return function myFirst() {
                console.log("my first")
            }
        }

    c. when we assign a function to variable, object and array
        
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




8. Difference between Regular function & Arrow function

1. syntax
2. arguments 
3. this (binding) => call, apply, bind
4. new/consturctor
5. super keyword


syntax 
function myFunction() {
    return "my return"
}

console.log(myFunction())

# Arguments 
function myFunc() {
    console.log(arguments)
}

myFunc(2, 4)

const myFunc = () => {
    console.log(arguments)
}

myFunc(2, 4)

# this (binding)
console.log(this)

const myObj = {
    name: "amar",
    city: "noida",
    myFunc: function(){
        console.log("my name is", this.name)
    }
}

const myObj = {
    name: "amar",
    city: "noida",
    myFunc: () => {
        console.log("my name is", this.name)
    }
}

myObj.myFunc()


# new/constructor

1. regular function
function Person(name, age, myFunc) {
  this.name = name;
  this.age = age;
  this.myFunc = myFunc;
}
function myFunc() {
    console.log("Im a function")
}
const john = new Person('John', 30, myFunc);
console.log(john.name); // Output: John
console.log(john.age); // Output: 30
console.log(john.myFunc())

2. arrow function
const Person = (name, age) => {
  this.name = name;
  this.age = age;
  this.myFunc = myFunc;
}

const john = new Person('John', 30);
console.log(john.name); // Output: John
console.log(john.age); // Output: 30

# super

class myFirst {
    const name = 'John';
    myFunc() {
        console.log("I'm parent class")
    }
}

class child extends myFirst {
    console.log(super.name)
    console.log(super.myFunc())
}

# ======================
# Array

1. numbers // const myArray = [2, 5, 6]
2. string // const myArray = ['2', '#', 'ram']
3. numbers & string (mixed array) // const myArray = [2, '#', 'ram']
const myArray = [1, 5]
myArray.push(8) // insert value from last index
console.log(myArray) // [1,5,8]
myArray.pop() // delete value from last index
console.log(myArray) // [1,5]
delete myArray[0]

// assignment
 1. slice,
 2. splice

push,pop,delete,isArray,forEach,map,filter,reduce,find,sort,reverse

# Object
1. object.values
2. object.entries
3. object.keys
4. for in

const  myObj = {name: 'Amar', age: 24, myFunc: ()=>{ "myFunc return"} }
myObj.myFunc

# string
length
charAt
substring
replace
split
toUpperCase
toLowerCase

# Date
const currentDate = new Date()
    1. getDate() => get current date in number ex: 27
    2. getTime() => get timestamp of date in numbers
    3. getFullYear() => get year in number

    4. getMonth() => return month in number but it refers 0 to 11, where 0 will be January and  11 will be december 

    5. getDay() => it retuns number but it refers day ex= (0 => sun, 1 => mon, 2 => tue, 3 => wed, 4 => thu, 5 => fri, 6 => sat) 

    6. getHours() => it returns number in hours
    7. getMinutes() => it returns number in minutes
    8. getSeconds() => it returns number in seconds
    9. getMilliseconds() => it returns number in milliseconds

    manipulate date function
    1. setDate()
    2. setTime()
    3. setHours()
    4. setMinutes()
    5. setSeconds()
    6. setMilliseconds()
    7. setFullYear()
    8. setDay()
    9. setMonth()



# Math
    1. PI
        console.log(Math.PI)
    2. Math.floor(Math.PI) ==> return actual value before decimal it never increases & decrease 
        ex 3.65 ===> output = 3

    3. Math.ceil(Math.PI) => return value with addition 1 if decimal value greater then 0
        ex 3.001 => output = 4

    4. Math.round(Math.PI) => retrun value if decimal value has >= 5 then add 1 in actual value
     ex 3.56 => output = 4 
        3.14 => output = 3

    5. Math.abs => it returns absolute value even number will be +, -
    ex -8 => output = 8
        +9 => output = 9
    6. Math.pow(2, 2)
    7. Math.sqrt(4)
    8. Math.max(3, 6, 1, 0)
    9. Math.min(3, 6, 1, 0)


        

# Number  
    we can convert string numner

    const myNumber = '2345234.34546fgsdgsdf'
    1. number(myNumber) = nan
    2. max
    3. min
    4. abs
    5. isNan


# Boolean  
true ====> 1
false ==> 0



if (true === '1') {
    console.log("true")
} else {
    console.log("false")
}

# DOM & BOM 








# DOM (Document Object Model)
 1. DOM Tree Structure 
 2. Accessing DOM Elements
    1. getElementById
    2. getElmentsByClassname
    3. getElementByTagName
    4. querySector()
    5. querySectorAll()

    


 3. Modifynig DOM Elements
    1. innerHTML
    2. innerText
    3. setAttribute
    4. style
    5. classList => add,remove
    6. textContet

 4. Responding Event Handlers
    1. click
    2. mouseDown
    3. mouseMove
    4. mouseUp
    5. mouseEnter
    6. mouseLeave
    7. mouseHover
    7. scroll
    5. focus
    6. blur
    7. change
    8. dblclick

Event delegation:
    
    capturing
    const myDivObj = document.getElementById("myDiv")
    const myPara = document.getElementById("myPara")
    const myButton = document.getElementById("myButton")


    myDivObj.addEventListener("eventName", function(){}, false)
    myPara.addEventListener("eventName", function(){}, true)
    myButton.addEventListener("eventName", function(){}, false)


    bubbling

    myDivObj.addEventListener("eventName", function(){})
    myPara.addEventListener("eventName", function(){})
    myButton.addEventListener("eventName", function(){})






















# BOM
1. window.document
2. window.location: Provides information about the current URL and allows you to navigate to a new URL.
    a. window.location.href
    b. window.location.host
    c. window.location.pathname
    d. window.location.search
    e. window.location.reload()

3. window.history: Allows you to manipulate the browser's history (back, forward, and navigation).
    a. history.back()
    b. history.forward()
    c. history.go(-2)
    d. history.go(3)
    e. history.replaceState({}, '', '/new-url')
    f. history.pushState({}, '', '/another-url')
4. window.navigator => Provides information about the user's browser and operating system.
    a. navigator.userAgent
    b. navigator.appName
    c. navigator.appVersion
    d. navigator.platform
    e. navigator.cookieEnabled
    f. navigator.javaEnabled()
    g. navigator.onLine
    h. navigator.plugins
    i. navigator.geolocation.getCurrentPosition(function(position) {
        console.log('Latitude:', position.coords.latitude);
        console.log('Longitude:', position.coords.longitude);
        });
    j. navigator.language
    k. navigator.userLanguage
    l. window.navigator.userAgentData
    m. navigator.getBattery
    navigator.getBattery().then(function(battery) {
        console.log('Battery Level:', battery.level);
        console.log('Charging:', battery.charging);
        console.log('Charging Time:', battery.chargingTime);
        console.log('Discharging Time:', battery.dischargingTime);

        // Add an event listener to track changes in battery status
        battery.addEventListener('chargingchange', function() {
            console.log('Charging status changed:', battery.charging);
        });
    });
    n. navigator.clipboard
     //writeText
            window.navigator.clipboard.writeText('Hello, world!').then(function() {
                console.log('Text copied to clipboard!');
            }).catch((err) => {
                console.log("===", err)   
            })
    //readText()
            window.navigator.clipboard.readText().then(function(text) {
                console.log('Text from clipboard:', text);
            });
    //write(data)
            var dataTransfer = new DataTransfer();
            dataTransfer.setData('text/plain', 'Hello, world!');
            window.navigator.clipboard.write(dataTransfer).then(function() {
                console.log('Data copied to clipboard!');
            });
    //read()
            window.navigator.clipboard.read().then(function(dataTransfer) {
                var text = dataTransfer.getData('text/plain');
                console.log('Text from clipboard:', text);
            });
        

5. window.screen => Provides information about the user's screen and display.
6. window.innerWidth and window.innerHeight => Returns the inner width and height of the browser window.
7. window.outerWidth and window.outerHeight => Returns the outer width and height of the browser window including any browser UI elements.
8. window.localStorage and window.sessionStorage => Allow you to store data locally in the user's browser.
9. window.alert(), window.confirm(), and window.prompt() => Display dialogs to the user for interaction.
10. window.setTimeout() and window.setInterval() => Enable scheduling of functions to run after a specified delay or at specified intervals.
11. window.onresize => An event handler that triggers when the browser window is resized.
12. window.open() => Opens a new browser window or tab.
13. window.close() => Closes the current browser window or tab.
14. window.print() => Opens the print dialog for the current page.
15. window.scrollTo() => Scrolls the window to a specified position.
16. window.scrollBy() => Scrolls the window by a specified amount.
17. window.scrollTo() and window.scrollBy() => Scroll the window to a specified position or by a specified amount.
 






























Assignment
 REPL 



