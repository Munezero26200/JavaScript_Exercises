//Write a JavaScript program to sort the characters of a string Alphabetically.
const sortAlphabetically= str=>{
    let sortedStr= str.split("").sort().join("");
    return sortedStr;
}
console.log(sortAlphabetically("aline"));