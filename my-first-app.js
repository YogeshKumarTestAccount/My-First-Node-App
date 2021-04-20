const fs = require('fs')
fs.writeFileSync('Test.txt','Hello Node.js');
//fs.writeFile('test1.txt','file test');
console.log('Hell Friends  i am Node');
var calculator = require('./calc-service');
var a=10, b=5;
console.log("Addition : "+calculator.add(a,b));
console.log("Subtraction : "+calculator.subtract(a,b));
console.log("Multiplication : "+calculator.multiply(a,b));
