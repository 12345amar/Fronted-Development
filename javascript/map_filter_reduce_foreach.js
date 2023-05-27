// forEach,map,filter,reduce
// diff between forEach & map

const myArray = [{name: "Amar", lname: "singh", age: 30, salary: 1000},{name: "Vijay", lname: "baghel", age:26, salary: 1500},{name: "Sanni", lname: "Chauhan", age:45, salary: 2000}]

const myforEach = myArray.forEach(element => {
    console.log(element)
});
console.log("==============foreach", myforEach)
const myMap = myArray.map(element => {
    console.log(element)
    return element.name + " " + element.lname
})
console.log("==============myMap", myMap)

// filter
// const myArray = [{name: "Amar", lname: "singh", age: 30},{name: "Vijay", lname: "baghel", age:26},{name: "Sanni", lname: "Chauhan", age:45}]

const myFilter = myArray.filter((value)=>{
    if (value.age <= 30) {
        return value
    }
});

console.log(myFilter)

// reduce use for performinng sum , max operation
// const myArray = [{name: "Amar", lname: "singh", age: 30, salary: 1000},{name: "Vijay", lname: "baghel", age:26, salary: 1500},{name: "Sanni", lname: "Chauhan", age:45, salary: 2000}]
const initialValue = 1
const myReduce = myArray.reduce((accumulator, currentValue)=>{

    console.log("currentValue", currentValue)
    accumulator = accumulator  + currentValue.salary
        console.log("accumulator", accumulator, initialValue)
    return accumulator
}, initialValue)
console.log("myReduce", myReduce)


