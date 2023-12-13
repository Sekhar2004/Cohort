// ## Create a counter in JavaScript

// We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
// It should go up as time goes by in intervals of 1 second

let counter = 0;

function updateCounter() 
{
  console.log(`Counter: ${counter}`);
  counter++;
}

const intervalId = setInterval(updateCounter, 1000);

let iterations = 0;
const maxIterations = 10;

const stopInterval = setInterval(() => 
{
  iterations++;
  if (iterations >= maxIterations)
   {
    clearInterval(intervalId);
    clearInterval(stopInterval);
    console.log("Counter stopped.");
  }
}, 1000);
