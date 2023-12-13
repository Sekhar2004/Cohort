// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require('fs');

const contentToWrite = 'This is the content that will be written to the file.';
const filePath = 'hi.txt';

function writeFileAsync(filePath, content)
 {
  fs.writeFile(filePath, content, 'utf8', (err) => 
  {
    if (err) 
    {
      console.error(`Error writing to file: ${err.message}`);
      return;
    }

    console.log(`Content successfully written to: ${filePath}`);
  });
}

writeFileAsync(filePath, contentToWrite);
