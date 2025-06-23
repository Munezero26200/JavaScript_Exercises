const filterOut= (arr,valuesToRemove)=>{
    let result=[];
    for(let value of arr){
        if(!valuesToRemove.includes(value)){
          result.push(value);
        }
    }
    return result;
}
console.log(filterOut([1, 2, 3, 4], [2, 4]));  