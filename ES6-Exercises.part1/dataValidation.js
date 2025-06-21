const createValidationProxy= obj=>{
    const handler={
        set(target,property,value,receiver){
            const originalValue= target[property];

            if(typeof originalValue==="number"){
                if(typeof value !=="number"){
                    throw new Error(`invalid type for ${property}. Expected number.`);
                    
                }
            }
            
            console.log(`setting ${property} to ${value}`);
            target[property]=value;
            return true;
        }
    }
    const proxy=  new Proxy(obj,handler)
    return proxy;
}
const user = { age: 25, name: "Aline" };
const proxyUser = createValidationProxy(user);
proxyUser.age=10;