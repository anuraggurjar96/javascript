//  IIFE = Immediately Invoked Function Expression

(function chai()
{
// named IIFE
console.log("DB Connedted")
})(); // ; bahut jaruuri h next or function iife ke liye 

// 2. Unnamed / Arrow IIFE (Bina naam wala)
( () => {
    console.log("DB CONNECTED TWO");
} )();

// 3. Parameterized IIFE (Value pass karne ke liye)
( (name) => {
    console.log(`DB CONNECTED TO ${name}`);
} )('Anurag');

// Notes........
// 🔥 IIFE KA ASLI SACH (NOTES FOR INTERVIEW):
// Q. Global scope ka pollution khatam karne ka kya matlab hai?
// Ans: Purani JS mein 'let' aur 'const' nahi hote the, sirf 'var' hota tha.
// 'var' global scope ko pollute (ganda) kar deta tha kyunki use kahin se bhi change kiya ja sakta tha.
// IIFE ka use karke hum 'var' ko ek temporary function ke andar lock kar dete hain, jisse uska GLOBAL SCOPE KHATAM ho jata hai aur humare variables safe rehte hain!
