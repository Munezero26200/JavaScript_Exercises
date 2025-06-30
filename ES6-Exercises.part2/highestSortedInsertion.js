//Write a JavaScript program to get the highest index at which value should be inserted into an array in order to maintain its sort order.
const getHighestInsertIndex= (arr, num)=>{
    let highestIndex=0;
    for(let i=0; i< arr.length; i++){
        if(num>=arr[i]){
         highestIndex= i+1;
        }
    }
    return highestIndex;
}
console.log(getHighestInsertIndex([1, 2, 2, 3, 5], 2));