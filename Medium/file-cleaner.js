// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

const fs = require('fs');

function cleanSpaces(inputString)
 {
  return inputString.replace(/\s+/g, ' ').trim();
}

function cleanFile(filePath)
 {
  const fileContent = fs.readFileSync(filePath, 'utf8');

  const cleanedContent = cleanSpaces(fileContent);

  fs.writeFileSync(filePath, cleanedContent, 'utf8');

  console.log(`File "${filePath}" cleaned successfully.`);
}

const filePath = 'hello.txt';

cleanFile(filePath);
