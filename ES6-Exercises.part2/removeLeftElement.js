// Write a JavaScript program to remove specified elements from the left of a given array of elements.
const removeLeftElements= (arr, num)=>{
 if(num===0)return arr;
 if (num>arr.length) return [];
 let result=arr.slice(num);
 return result;
}
console.log(removeLeftElements([1,2,3,4,5,6],3))