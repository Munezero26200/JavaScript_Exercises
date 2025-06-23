//the goal is to take a string and place it into the system clipboard.

const copyString= str=>{
   let result= navigator.clipboard.writeText(str);
   result.then(()=>{
    console.log("copied to clipboard successfully!");
   })
   .catch(err=>{
    console.log("failed to copy to clipboard",err);
   });
}
