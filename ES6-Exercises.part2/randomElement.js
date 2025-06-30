//Write a JavaScript program to get a random element from an array.
const randomElement= arr=>{
     let indexEle= Math.floor(Math.random()*arr.length);
     return arr[indexEle];
}
console.log(randomElement([12,34,5,6,7]));
console.log(randomElement(["a","b","c"]));