//Write a JavaScript program to compute the average of an array, after mapping each element to a value using the provided function.
const averageOfArrayElement= (arr,fn)=>{
    if(arr.length===0)return 0;
    let mappedArr= arr.map(fn);
    let sum= mappedArr.reduce((acc,curr)=>acc+curr);
    let average= sum/mappedArr.length;
    return average;
}
console.log(averageOfArrayElement([10,20,30],x=>x+5));