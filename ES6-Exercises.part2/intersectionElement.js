//Write a JavaScript program to get an array of elements that appear in both arrays.
const intersectionArr= (arr1,arr2)=>{
    let result=[];
    for(let element of arr1){
        if(arr2.includes(element)){
          result.push(element);
        }
    }
    return result;
}
console.log(intersectionArr([1,3,4,5,6,9],[1,3,8,4,12]));