//Write a JavaScript program to perform a deep comparison between two values to determine if they are equivalent.
const deepComparison= (a,b)=>{
    if(a===b) return true;
    if(typeof a!== "object" || a===null||
       typeof b!=="object"  || b===null){
         return false;
       }
    const keysA= Object.keys(a);
    const keysB= Object.keys(b);
    if(keysA.length !== keysB.length) return false;
    
    for(let key of keysA){
        if(!keysB.includes(key)) return false;
        if(!deepComparison(a[key],b[key])) return false;
    }
    return true;
}
console.log(deepComparison(1,"1"));
console.log(deepComparison({ a: { b: 2 } }, { a: { b: 2 } }))