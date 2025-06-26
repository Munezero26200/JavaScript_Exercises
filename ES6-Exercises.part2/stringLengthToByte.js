//Write a JavaScript program to convert a given string's length to bytes.
//we are going to use built-in API called TextEncoder
const getByteLength= str=>{
    const encoder= new TextEncoder();//this create a new TextEncode object
    const encoded= encoder.encode("str");
    return encoded;
}
console.log(getByteLength("encoded"));