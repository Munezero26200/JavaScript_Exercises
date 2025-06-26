//Write a JavaScript program to curry (curries) a function.
const curry= fn=>{
    return  curried=(...args)=>{
       if(args.length>=fn.length){
        return fn(...args);
       }else{
        return (...nextArgs)=>{
            return curried(...args,...nextArgs);
        }
       }
    }
}
const add=(a, b, c)=> {
  return a + b + c;
}

const curriedAdd = curry(add);

console.log(curriedAdd(1)(2)(3));     // 6
console.log(curriedAdd(1, 2)(3));     // 6
console.log(curriedAdd(1)(2, 3));     // 6
console.log(curriedAdd(1, 2, 3));     // 6
