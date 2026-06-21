//for loop......

const arr = [1,2,3,4,5]

for (const num of arr)
     
{
    //console.log(num);
    
}

// use in string

const greeting = "Hello.World"

for(const greet of greeting)
{
   // console.log(`Each char is ${greet}`);
}

//Map..........

const map = new Map()
map.set(`IN`, "India")
map.set('Fr', "Farance")
map.set('USA',"United state of america")

//console.log(map)
  
// map me for loop...........

for (const [key, Value] of map) 
    {
        console.log(key, ':-' ,Value)
    
}

// object me loop...

const myObject = { 
    game1: 'NFS',
    game2: 'Spiderman'
}

// ❌ ERROR ALERT: Direct 'for...of' Object par nahi chalta!
// Isko chalane par "TypeError: myObject is not iterable" milega.
// FIX: Isko theek karne ke liye 'myObject' ko 'Object.entries(myObject)' likhna padega.
for (const [key, Value] of myObject) 
{
    console.log(key, ':-', Value)
}
