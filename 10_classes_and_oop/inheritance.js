// 1. Base Class (Parent Class) banayi
class User {
    constructor(username){
        this.username = username
    }

    logMe() {
        console.log(`USERNAME is ${this.username}`);
    }
}

// 2. Derived Class (Child Class) jo User se inherit ho rahi hai
class Teacher extends User {
    constructor(username, email, password) {
        super(username) // Parent class ke constructor ko call kiya
        this.email = email
        this.password = password
    }

    addCourse() {
        console.log(`A new course was added by ${this.username}`);
    }
}

// 3. Teacher class ka ek naya object (instance) banaya
const chai = new Teacher("chai", "chai@gmail.com", "12345")

// chai.addCourse()

// ==========================================
// TECHNICAL NOTES: 'instanceof' operator
// ==========================================
// 'instanceof' operator ye check karta hai ki koi object (instance) kisi specific Class ya Constructor Function se bana hai ya nahi.
// Ye boolean value return karta hai: 'true' ya 'false'.

console.log(chai instanceof User); 
// OUTPUT: true
// REASON: Kyunki 'chai' ko humne 'Teacher' class se banaya hai, aur 'Teacher' class 'User' class ko extend (inherit) karti hai. 
// JavaScript ki prototype chain me 'Teacher' ke upar 'User' aata hai, isliye ye 'true' dega.

console.log(chai instanceof Teacher);
// OUTPUT: true
// REASON: Kyunki 'chai' direct 'Teacher' class ka hi object hai.

console.log(chai instanceof Object);
// OUTPUT: true
// REASON: JavaScript me saari classes aur objects aakhiri me 'Object' base prototype se hi bante hain.
