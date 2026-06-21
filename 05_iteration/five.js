// forEach.....
 
const coding = ["js","ruby","java","python","cpp"]

// coding.forEach( function (val)
// {
//     console.log(val);
// }
// )
//  coding.forEach( (item) => 
//  {
//     console.log(item);
//  }
//  )

// function printMe(item)
// {
//     console.log(item);

// }
// coding.forEach(printMe)

// item ke alawa or bhi acces hota h 

// coding.forEach((item, index,arr) =>
// {
//     console.log(item, index,arr);
// } )


// arr mese req object nikalana ..

const myCoding = [
    {
        languageName : "JavaScript",
        languageFile: "js"
    },
    {
        languageName : "java",
        languageFile: "java"
    },
    {
        languageName : "python",
        languageFile: "py"
    },
]

myCoding.forEach((item) =>
     
    {
        console.log(item.languageFile);
})


// ==========================================
// ⚡ SHORT NOTES: Array of Objects + forEach
// ==========================================
// 1. Structure: Array [] ke andar multiple Objects {} hain.
// 2. forEach: Sirf Arrays ke liye loop hai (No return value).
// 3. 'item' Variable: Isme har round me ek POORA OBJECT aata hai.
// 4. Dot (.) Trick: Andar ka data nikalne ke liye dot lagao (e.g., item.languageName).
// 5. Cheat Code: {} -> for...in | [] -> for...of | [{}, {}] -> forEach
