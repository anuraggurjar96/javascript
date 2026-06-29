const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }

}



//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this);


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}

const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne.constructor);
//console.log(userTwo);const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this); // NOTE: Ye 'this' current object (yaani 'user') ko point kar raha hai
    }
}

// console.log(user.username)
// console.log(user.getUserDetails()); // NOTE: Object ke andar ka function (method) call kiya
// console.log(this); // NOTE: Browser me 'window' object dega, Node.js me khali object '{}' dega


// --- CONSTRUCTOR FUNCTION (Blueprint/Sancha) ---
function User(username, loginCount, isLoggedIn){
    // 'this.variable' naye banne wale object me properties add karta hai
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    return this // NOTE: Ye likhna compulsory nahi hai, 'new' keyword ise apne aap return kar deta hai
}

// --- NEW KEYWORD KA KHEL ---
// 1. Ek naya khali object '{}' banta hai
// 2. Constructor function call hota hai
// 3. 'this' keyword us naye khali object se jud jata hai
// 4. Data fill hokar object return ho jata hai
const userOne = new User("hitesh", 12, true) 

// NOTE: Agar 'new' nahi lagate toh userTwo ka data userOne ko overwrite (mita) deta
const userTwo = new User("ChaiAurCode", 11, false) 

console.log(userOne.constructor); // NOTE: Output '[Function: User]' aayega, matlab ye object kis function se bana hai uska reference deta hai
// console.log(userTwo);
