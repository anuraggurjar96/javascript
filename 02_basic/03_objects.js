// sigleton....

const { jsx } = require("react/jsx-runtime")

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Hitesh",
    fullNmae: "Anurag Gurjar",
    [mySym]: "myKey1", // use as a symbol obj ....
    age : 18,
    location: "Jaipur",
    email: "gurjaranurag@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Sunday"]
}
//object acces ........

//console.log(JsUser.email)
//console.log(JsUser["email"]) //use this method ...
//console.log(JsUser["fullNmae"])
// not acces thre 
//console.log(JsUser.fullName)

console.log(JsUser[mySym])

//obj value change ...
JsUser.email = "siradhna@gmail.com"
Object.freeze(JsUser)
JsUser.email = "anurag@gmail.com"
console.lod(JsUser)



