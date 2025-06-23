const compareObj= (obj1,obj2)=>{
    for(let key in obj2){
       if(obj1[key]!==obj2[key]){
         return false;
   }
}
return true;
}
const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { a: 1, b: 3 };

console.log(compareObj(obj1, obj2)); 
