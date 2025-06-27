//Write a JavaScript program to filter out non-unique values in an array, based on a provided comparator function.
const filterout= arr =>{
    let comparator= (a,b)=>a===b;
    return  arr.filter(item=>{
        const count= arr.reduce((acc,otherItem)=>{
            return acc+ (comparator(item,otherItem)? 1 : 0);
        },0);
        return count===1;
    })
}
console.log(filterout( [1, 2, 2, 3, 4, 4, 5]));