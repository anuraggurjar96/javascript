//for>>>>>>>>>>

for(let i = 1; i<= 10;i++)
{
    //console.log(`outer loop value : ${1}`);
    for(let j = 1;j<=10; j++)
    {
  //console.log(`Inner loop value ${j} and inner loop ${i}`);
    //console.log(i+'*'+j+'='+ i*j);

    }
       
}

let myArray = ["flash","batman","superman"]

//nsole.log(myArray.length);
for(let index = 0; index < myArray.length; index++)
{
    const element = myArray[index];
    //nsole.log(element);

}

//    
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`); // Backtick ko band kiya
        continue; // Isse 5 print nahi hoga, seedhe agla round shuru hoga
    }
    console.log(`Value of i is ${index}`);
}
