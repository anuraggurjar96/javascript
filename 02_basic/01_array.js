// Array.....

const myArr = [0,1,2,3,4,5]
const myToy = ["Jcb","Truk","Machines"]

const myArr2 = new Array(1,3,4,6,7)

//console.log(myArr[3])

//Array methods.....

myArr.push(9) //insert new element in arr

myArr.pop()// remove element recent push

//console.log(myArr)

//myArr.unshift(7)


//myArr.shift

//console.log(myArr.includes(8))
//console.log(myArr.indexOf(2));

const newArr = myArr.join()

//console.log(myArr)
//console.log(newArr)

// slice , splice.....

console.log("A",myArr)

const myn1 = myArr.slice(1,3)

console.log(myn1)

const myn2 = myArr.splice(1,3)

console.log("c",myArr)
console.log(myn2)

