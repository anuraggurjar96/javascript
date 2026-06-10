var c = 100

if(true)
{
    let a =30
    const b = 20

// console.log("INER:" ,a);
// console.log("INER:", b);

}
//console.log(c);

function one()
{
    const username = "Anurag";

    function two()
    {
        const webside = "YouTube"
        console.log(username)
         console.log(username+webside)

    }

    //console.log(webside)
   // two()
}
///one()

// ++++++++++INTERSTiING++++++++++++

// function declaration
function addone(num)
{
return num + 1

}


console.log(addone(6))

//console.log (addTwo(8)) //islo yha use nhi kar skte kyu ki hmne const bna diya function ko 
 const addTwo = function(num)
{
    return num + 2
}

console.log (addTwo(8))

// notes concept...........

// 🔥 INTERVIEW QUICK SUMMARY CHEAT-SHEET:
// 1. Normal Function Definition -> Hoisted! (Upar-neeche har jagah clickable/callable hai).
// 2. Const/Let Function Expression -> Temporal Dead Zone (TDZ) mein hota hai, upar access karne par Initialization Error dega.
// 3. Var Function Expression -> Upar access karne par "addTwo is not a function" ka error dega kyunki var starting mein 'undefined' hota hai.