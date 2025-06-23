const numToArr= num =>{
    let result= num.toString().split("").map(Number);
    return result;
}
console.log(numToArr(12345));