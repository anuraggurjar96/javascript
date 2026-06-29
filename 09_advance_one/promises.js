const promisesOne =new Promise(function(reslove, reject)
{
    setTimeout (function()
{
    console.log("Async task is complete");
reslove()
},1000)
})

promisesOne.then(function()
{
    console.log("Promise consumed")
})

// tarika 2 nd of promises....
 new Promise(function(reslove, reject)
 {
 setTimeout (function()
{
    console.log("Async task 2 ");

  // reslove jo bhoi pass karoge wo mil jayega ..

reslove({username: "Chai", email: "gurjar@gmail.com"})
},1000)
  
}).then(function(user)
{
    console.log("Async task 2 resolves")
    console.log(user);
    console.log(user.username);
});
const promisesOne = new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log("Async task is complete");
        resolve(); //  NOTE: resolve() call hone par hi .then() chalta hai.
    }, 1000)
})

promisesOne.then(function() {
    console.log("Promise consumed")
})

// Tarika 2
new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log("Async task 2 ");
        resolve({username: "Chai", email: "gurjar@gmail.com"}) // 💡 NOTE: Yahan se data bahar bheja.
    }, 1000)
}).then(function(user) { //  NOTE: Data catch karne ke liye bracket me 'user' ya 'data' likhna zaroori hai.
    console.log("Async task 2 resolves");
    console.log(user.username); // Output: Chai
})

/*
SHORT NOTES (QUICK REVISION)
2. Link: resolve() seedhe .then() ko trigger karta hai.
3. Data Catch: resolve(data) -> .then(function(data)) [Parameter zaroori hai].
4. Tarika 1 vs 2: Variable tab banayein jab reuse karna ho, direct chain (.then) tab karein jab turant chalana ho.
*/

