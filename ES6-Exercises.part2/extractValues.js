//Write a JavaScript program to extract values at specified indexes from a specified array.

const extractValue= (arr,arrindex)=>{
    let result=[];
 for(let i of arrindex){
    let value= arr[i];
    result.push(value);
 }
 return result;
}
const data = ["apple", "banana", "cherry", "date", "elderberry"];
const indexes = [1, 3, 4];
console.log(extractValue(data,indexes));