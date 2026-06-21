const myNums = [1,2,3]

// const myTotal = myNums.reduce(function (acc, curr)
// {
//     console.log(`acc: ${acc} and current: ${curr}`);
//     return acc+curr;
// },0)

// dusara tarika likhane ka koi bhi use kar skte ho 


//const myTotal = myNums.reduce( (acc,curr) => acc+curr,0)
//console.log(myTotal);

// other example....

const ShoppingCart = [
    {
        itemName: "JS course",
        prices: 2999
    },
    {
        itemName: "Python course",
        prices: 5000
    },
    {
        itemName: "App dev course",
        prices: 10000
    },
]

const TotalPrice = ShoppingCart.reduce((acc,item) => acc+item.prices,0)

console.log(TotalPrice);