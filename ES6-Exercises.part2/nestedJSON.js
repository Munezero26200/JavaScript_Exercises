const findValue= (obj,keyToFind)=>{
    for(let key in obj){
        if(key===keyToFind){
            return obj[key];
        }
        if(typeof obj[key]=== "object" && obj[key] !== null){
            let result= findValue(obj[key],keyToFind);
            if(result !==undefined){
                return result;
            }
        }
    }
    return undefined;
}
const data = {
  id: 1,
  user: {
    name: "Aline",
    contact: {
      email: "aline@example.com"
    }
  }
};

console.log(findValue(data, "email")); // "aline@example.com"
console.log(findValue(data, "name"));  // "Aline"
console.log(findValue(data, "id"));    // 1
console.log(findValue(data, "missingKey")); // undefined
