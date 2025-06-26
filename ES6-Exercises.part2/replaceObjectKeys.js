//Write a JavaScript program to replace multiple object keys' names with the values provided.
const replaceObjectKeys= (obj,keysMap)=>{
    let results={};
    for(let key in obj){
        if(keysMap.hasOwnProperty(key)){
            let newKey= keysMap[key];
            results[newKey]=obj[key];
        }else{
            results[key]= obj[key];
        }
    }
    return results;
}
const obj = { name: "Aline", age: 30, city: "Kigali" };
const keysMap = { name: "fullName", city: "location" };
console.log(replaceObjectKeys(obj,keysMap));