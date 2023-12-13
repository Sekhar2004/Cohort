const Calculator = require('./Calculator'); 
const calculator = new Calculator();
const expression = '10 + 2 * (6 - (4 + 1) / 2) + 7';

try 
{
  calculator.calculate(expression);
  console.log(`${calculator.getResult()}`);
} 
catch (error)
{
  console.error(`Error: ${error.message}`);
}
