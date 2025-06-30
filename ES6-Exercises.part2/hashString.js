//Write a JavaScript program to hash the input string into a whole number.
const hashString= str=>{
    let arrStr= str.split("");
    let hashVal=0;
    for(let char of arrStr){
        hashVal= hashVal*31 + char.charCodeAt(0);
    }
    return hashVal;
}
console.log(hashString("Munezero"));