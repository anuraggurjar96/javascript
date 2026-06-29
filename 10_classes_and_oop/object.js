function multipleBy5(num)
{
    return num*5
}

multipleBy5.power = 2;

console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);

function creatUser(Username, score)
{
    this.Username = Username
    this.score = score
}
creatUser.prototype.increment = function(){
    score++
}
creatUser.prototype.printMe = function(){
    console.log(`score is ${this.score}`);

}
const chai = new  creatUser("chai",25)
const tea =  creatUser("tea",250)

chai.printMe()

//*******************Notes With *********888 */

// 1. Ek normal function banaya jo number ko 5 se multiply karta hai
/*function multipleBy5(num) {
    return num * 5;
}

// JavaScript mein FUNCTION BHI EK OBJECT HOTA HAI. 
// Isiliye hum function par dot (.) laga kar properties add kar sakte hain.
multipleBy5.power = 2;

console.log(multipleBy5(5)); // Output: 25 (Function call hua)
console.log(multipleBy5.power); // Output: 2 (Function ki property access hui)

// Har function ka apna ek khali 'prototype' object hota hai
console.log(multipleBy5.prototype); // Output: {} (Khali object)


// 2. CONSTRUCTOR FUNCTION: Naye objects banane ke liye template
function creatUser(Username, score) {
    this.Username = Username; // 'this' ka matlab hai jo naya object banega uski property
    this.score = score;
}

// PROTOTYPE MEIN NAYA METHOD ADD KARNA:
// BUG FIX 1: Pehle aapke code mein sirf 'score++' tha, jisse error aata.
// Hamein batana padega ki KISKA score badhana hai, isiliye 'this.score++' likha.
creatUser.prototype.increment = function() {
    this.score++; 
};

// Prototype mein dusra method add kiya info print karne ke liye
creatUser.prototype.printMe = function() {
    console.log(`score is ${this.score}`);
};

// OBJECTS BANANA:
// 'new' keyword likhna zaroori hai. Ye ek naya khali object banata hai aur 
// use prototype ke saare methods (jaise printMe, increment) de deta hai.
const chai = new creatUser("chai", 25);

// BUG FIX 2: Pehle aapne yahan 'const chai' fir se likha tha, jisse duplicate error aaya tha.
// Aur yahan 'new' keyword miss tha. Bina 'new' ke prototype ke methods kaam nahi karenge.
const tea = new creatUser("tea", 250); 

// Method ko call karna
chai.printMe(); // Output: score is 25
*/



