
const arrayStats= arr=>{
   if(arr.length===0){
    return {};
   } 
   let sum=arr.reduce((acc,curr)=>acc+curr);
   let average= parseFloat((sum/arr.length).toFixed(2));
   let minNum=Math.min(...arr);
   let maxNum=Math.max(...arr);
let result={sum,
            average,
            min:minNum,
            max:maxNum};

return result;
}
console.log(arrayStats([1,2,3,4,5]));
