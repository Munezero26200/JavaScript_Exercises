//a decorator in this context: is just a function that takes another function and retur a new function but with extra behavior added. 
//in this case the extra behovior is:log how long the function takes to run.
//what does "Log the execution time" mean? I need to:
//Record the start time
//Run the function
//recod the end time
//log the difference
const logExecutionTime = func =>{
  return (...args) =>{
   const start= Date.now();
   const result= func(...args);
   const end= Date.now()
   console.log("Function took",end-start,"ms");//this message is printed on console and function still returns the actual result of the original function.
  return result;
  }
}
const greet= name=> {
  return `Hello, ${name}`;
}

const decorated = logExecutionTime(greet);
const output = decorated("Alice");

console.log("Returned value:", output);

