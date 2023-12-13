// can you create a clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats -

// HH:MM::SS (Eg. 13:45:23)

// HH:MM::SS AM/PM (Eg 01:45:23 PM


function getCurrentTime() 
{
    const now = new Date();
  
    const hhmmss = now.toLocaleTimeString('en-US', { hour12: false });//24 hours bro
  
    const hhmmssAmPm = now.toLocaleTimeString('en-US', { hour12: true });// only 12 hours bro
  
    console.clear(); 
  
    console.log(`Current Time (24-hour format): ${hhmmss}`);
    console.log(`Current Time (12-hour format): ${hhmmssAmPm}`);
  }

  setInterval(getCurrentTime, 1000);
  