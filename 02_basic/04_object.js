// 1. Pehle users array aur tinderUser object ko banao (Define karo)
const users = [
    { id: 1, email: "hitesh@gmail.com" },
    { id: 2, email: "anurag@gmail.com" },
    { id: 3, email: "sam@gmail.com" }
];

const tinderUser = {
    id: "123abs",
    name: "Sunny",
    isLoggedIn: false
};

// 2. Ab is data ko print karo (console.log ka use karke)
// console.log(users[1].email); // Output: anurag@gmail.com

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// Object de-Structure............

const course = {
    name: "Java Script",
    Price: "1000",
    Teacher: "HiteshSir"
};


// De -str consept  mtlb ki hmne course me se techer ko nikal liya ab direct "Teacher ko acces kar slkte h"

const {Teacher} = course

 //const {Teacher:Tech} = course

console.log(Teacher)


//API.... Json

{
   "name": "Java Script",
    "Price": "1000",
    "Teacher": "HiteshSir"  
}

[
    {},
    {},
    {}
]

