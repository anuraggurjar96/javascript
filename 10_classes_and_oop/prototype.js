// --- 1. STRING SECTION ---
let myName = "Anurag   ";
let myLName = "Gurjar   ";

// Goal: String ki bina spaces wali real length nikalna.
// Iske liye hum String prototype mein khud ka custom method 'trueLength' banayenge.
String.prototype.trueLength = function() {
    return this.trim().length;
};

console.log(`My Name True Length: ${myName.trueLength()}`); // Output: 6
console.log(`Last Name True Length: ${myLName.trueLength()}`); // Output: 6


// --- 2. PROTOTYPE SECTION ---
let myHeros = ["thor", "spiderman"];

let heroPower = {
    thor: "hammer",
    spiderman: "sling",
    getSpiderPower: function() {
        console.log(`Spidy power is ${this.spiderman}`);
    }
};

// Top-level Object Prototype mein method add kiya (Dada Ji ki power)
Object.prototype.anurag = function() {
    console.log(`anurag is present in all objects`);
};

// Sirf Array ke Prototype mein method add kiya (Papa ki power)
Array.prototype.heyAnurag = function() {
    console.log(`anurag says hello`);
};

// --- TESTING PROTOTYPES ---
heroPower.anurag();   // CHALEGA: Kyunki heroPower ek Object hai.
myHeros.anurag();     // CHALEGA: Kyunki Array bhi internal ek Object hi hota hai.

myHeros.heyAnurag();  // CHALEGA: Kyunki myHeros ek Array hai.
// heroPower.heyAnurag(); // ERROR DEGA (Isliye comment hai): Object ke paas Array ki exclusive power nahi hoti.


// --- 3. PROTOTYPAL INHERITANCE SECTION ---
// Sabhi objects ke alag-alag naam rakhe taaki 'already declared' error na aaye.
const User = {
    name: "Anurag",
    email: "anurag@google.com"
};

const Teacher = {
    makeVideo: true
};

const TeachingSupport = {
    isAvailable: false
};

const TSSupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    // Purana tarika: Direct object ke andar link karna
    __proto__: TeachingSupport 
};

// Modern Tarika: Ek object ko dusre object se jodne ka (Inheritance)
Object.setPrototypeOf(Teacher, User); // Teacher ab User ki properties access kar sakta hai

// --- TESTING INHERITANCE ---
console.log(Teacher.name);       // Output: Anurag (User se inherit hua)
console.log(TSSupport.isAvailable); // Output: false (TeachingSupport se inherit hua)
