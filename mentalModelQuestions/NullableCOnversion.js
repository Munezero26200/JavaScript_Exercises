
const convertNullableValues= obj=>{
    for(let key in obj){
        if(obj[key]===null){
            obj[key]=0;
        }else if(obj[key]===undefined){
            obj[key]="";
        }
    }
    return obj
}
console.log(convertNullableValues({
  name: undefined,
  age: null,
  city: "Lagos"
}))