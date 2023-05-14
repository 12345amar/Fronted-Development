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







Assignment
 REPL 



