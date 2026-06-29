// 1. Ye ek normal function hai jo sirf username set karne ke liye banaya gaya hai.
function SetUsername(username)
{
    // complex db call (maan lo yahan database ka koi kaam ho raha hai)
    
    // NOTE: Agar isko normal call karoge, to iska 'this' Global Object (Window/Global) ko point karega.
    // Lekin niche .call(this) ki wajah se, ye 'this' ab 'creatUser' ke naye object ko point kar raha hai.
    this.username = username
    console.log("call");
}

// 2. Ye ek Constructor Function hai jo naya User Object banane ke kaam aayega.
function creatUser(username, email, password)
{
    // TECHNICAL NOTE (Explicit Binding): 
    // Yahan sirf SetUsername(username) likhte to uska execution context (this) gayab ho jata.
    // .call() ka use karke humne 'creatUser' ka 'this' (naya khali object) 'SetUsername' ko udhaar de diya.
    // Ab SetUsername usi naye object ke andar 'username' property jod dega.
    SetUsername.call(this, username)
     
    // Ye dono properties to isi function ke context me direct set ho rahi hain.
    this.email = email
    this.password = password
}

// 3. 'new' keyword memory me ek naya khali object {} banata hai.
// Aur 'creatUser' ke andar ke 'this' ko us naye object se link (bind) kar deta hai.
const chai = new creatUser("chai", "chai@fb.com", "123")

// 4. Output check karne ke liye: 
// Screen par poora object print hoga jisme username, email aur password teeno honge.
console.log(chai) 


// output...
//creatUser { username: 'chai', email: 'chai@fb.com', password: '123' }
