//symbol() creates a unique and hidden key. even if two symbols have the same discription, they are never equal.
//when you use a Symbol as a key in an object,it:
//won't show up in Object.key(),for...in, or JSON.stringify().
//is harder to guess or access accidentally
//can be use to simulate "private" properties
const secureConfig= (config, apikey) =>{
const secretKey= Symbol("apiKey");//create a Symbol key with description "apikey"
config[secretKey]=apikey;//store the actual api using the symbol
return {config, secretKey};//return both so caller can access the hidden value
}
const {config, secretKey}= secureConfig({name:"Aline"},"my-secret-key");
console.log(config);
console.log(config[secretKey]);