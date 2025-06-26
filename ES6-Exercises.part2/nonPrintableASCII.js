//Write a JavaScript program to remove non-printable ASCII characters from a given string.
const removeNonPrintable= str=>{
    let result=[];
    for(let i=0; i<str.length;i++){
        let char= str[i];
        let code= char.charCodeAt(0);
        if(code>=32 && code<=126){
            result.push(char);
        }
    }
    return result.join("");
}
let messyString = "Hello,\nWorld!\tThis is a test\u0007 string.";
let cleanedString = removeNonPrintable(messyString);

console.log("Original:", messyString);
console.log("Cleaned:", cleanedString);