//Function............

function MyName()
{
    console.log("A")
    console.log("N")
    console.log("U")
    console.log("R")
    console.log("A")
    console.log("G")
}

//MyName()

function AddNum(Number1 , Number2)
{
    console.log(Number1 + Number2)
}
AddNum(4,7)

//  exp.........
function AddNum(Number1 , Number2)
{
    //both tarike se likh skte h 


    // let result = Number1 + Number2
    // return result;

    return Number1 + Number2
}
const result = AddNum(5,7)
//console.log("Result" , result)

function loginMsg(userName) //  function loginMsg(userName = "sam")
{
    // check kar lete h yadi undefine h to
    
    if(userName === undefined) // yaha userName === undefined isko "!undefined" likh skate h 

    {
        console.log("Enter your UserName ")
    }
    return `${userName} just log in` // yad rakhana yaha " ' " use nhi hua yha tap key " ` " use hua h 
}

console.log(loginMsg("Anurag"))
console.log(loginMsg())

// return karane aage ka print nhi krega smja 

//yadi ham chah rahe h ki undefined case aaye nhi to userName ki default value dede  
//