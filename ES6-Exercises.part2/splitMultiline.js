//Write a JavaScript program to split a multiline string into an array of lines.
const splitLine= str =>{
let result= str.split(/\r?\n/);
return result;
}
console.log(splitLine(`Hello world
This is JavaScript
Let's split this`));