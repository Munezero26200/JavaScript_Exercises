//Write a JavaScript function that returns true if the provided predicate function returns true for all elements in a collection, false otherwise.
const all= (arr,predicate)=>{
    for(let element of arr){
        let test= predicate(element);
        if(test=== false) return false;
    }
    return true;
}
const isEven = num => num % 2 === 0;
console.log(all([2, 4, 6], isEven));    
console.log(all([2, 3, 6], isEven));    
