const UserEmail =[]

if(UserEmail)
{
    //console.log("Got user email");

}

else{
    //console.log("Dont have user email");

    
}

// falsy values 


// false,0,-0, BigInt 0n, "",null,undefined ,NaN

// truthy values...
//"0",'false', " ";[],{ }, function(){}

const emptyObj = {}

if(Object.keys(emptyObj).length === 0)
{
    //console.log("Object is empty")

}

// Nullish caolescing operator (??) null undefine

let val1;
val1 = 5 ??  10
val1 = null ?? 10
val = undefined ?? 15
val1 = null ?? 10 ?? 20

console.log(val1)

// Terniary Operator....

// condition ? true : false use simple if _ else op


const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80"): console.log("more than 80")