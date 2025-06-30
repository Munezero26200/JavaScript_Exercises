//Write a JavaScript program to get the lowest index at which values should be inserted into an array in order to maintain its sorting order.
const getInsertIndex= (Arr,num)=>{
    for(let i=0; i < Arr.length; i++){
        if(num<= Arr[i]){
            return i;
        } 
    }
    return Arr.length;
}
console.log(getInsertIndex([10, 20, 30, 40], 25));