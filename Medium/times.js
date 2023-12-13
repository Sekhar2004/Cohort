/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
*/

function calculateTime(n) 
{
    const start=new Date().getTime();

    let sum=0;

    for(let i=0;i<n;i++)
    {
        sum+=i;
    }

    const end=new Date().getTime();

    const elapsedTime=(end-start)/1000;
    return elapsedTime;


    

}

const result1=calculateTime(100);
console.log(result1);

const result2=calculateTime(100000);
console.log(result2);

const result3=calculateTime(1000000000);
console.log(result3);

// module.exports=calculateTime;