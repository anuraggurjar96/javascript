// primitive datatype 
// 7 types: String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null

let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)
const bigNumber = 3462465475668n




// Reference (Non Primitive)
// Array, Object, Functions

const Array = ["Anurag","Anu","Abhishek"]

let myobj = {
    name: "Anurag",
    age: 20,
}

    const myfunction = function()
    {
        console.log("Hello Anurag");

    }
console.log(typeof scoreValue);
console.log(typeof myfunction);

//+++++++++++++++++++++++++++++++++++++++
// memory.....
// Stack(Primitive), Heap (Non-Primitive)

let myYouTubename = "anuraggurjaroffical"

let anothername = myYouTubename
anothername = "gurjaranu"

console.log(myYouTubename)
console.log(anothername) // stack proovide not acutal object,only copy 

let userOne = {
    email: "gurjaranurag67@gmail.com",
    contact: 8824112516,

}
let userTwo = userOne

userTwo.email = "demo@gmail.com"
userTwo.contact = 9660384823

console.log(userOne.email)

console.log(userOne.contact) // in the heap memory provide refernce object ,change in original value 

 