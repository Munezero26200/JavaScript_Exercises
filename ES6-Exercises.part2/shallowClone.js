//Write a JavaScript program to create a shallow clone of an object.
const shallowClone= obj=>{
let clone= {...obj};
return clone;
}
console.log(shallowClone({name:"Aline",age:50}));