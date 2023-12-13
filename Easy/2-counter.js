// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

// (Hint: setTimeout)

function createCounter(count, duration) 
{
    if (count > duration) 
    {
      console.log("Counter stopped.");
      return;
    }
  
    console.log(`Counter: ${count}`);
    setTimeout(() => createCounter(count + 1, duration), 1000);
  }
  
  createCounter(0, 10);
  