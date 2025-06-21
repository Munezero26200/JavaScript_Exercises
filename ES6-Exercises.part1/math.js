export const add=(a,b)=>{
   return a+b;
}
export const substract=(a,b)=>{
    return a-b;
}
export const multiply=(a,b)=>{
    return a*b;
}
export const division=(a,b)=>{
    if(b===0)throw new Errow(`this is not possible.`)
    return a/b
}
